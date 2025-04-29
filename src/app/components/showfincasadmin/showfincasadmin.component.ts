import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Finca } from '../../models/Finca';
import { FincaService } from '../../services/finca.service';
import { Router, RouterModule } from '@angular/router';
import { Foto } from '../../models/Foto';
import { FotoService } from '../../services/foto.service';
import { AuthServiceService } from '../../services/auth-service.service';

type FincaConFotos = Finca & {fotos: Foto[]}

@Component({
  selector: 'app-showfincasadmin',
  imports: [ CommonModule, RouterModule, NgFor ],
  templateUrl: './showfincasadmin.component.html',
  styleUrls: ['./showfincasadmin.component.css'],
})
export class ShowfincasadminComponent implements OnInit {
  datosFincas: FincaConFotos[] = [];
  usuario: any
  cargando: boolean = true;

  constructor(private fincaService: FincaService, private fotoService: FotoService, private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
    this.usuario = this.authService.obtenerUsuario()
    this.cargarFincas();
  }

  async cargarFincas() {
    try {
      const fincas = await this.fincaService.getFincasByAdmin(this.usuario.id)

      const fincasConFotos = await Promise.all(
        fincas.map(async (finca) => {
          let fotos = await this.fotoService.getFotosByFinca(finca.id)

          if (!fotos || fotos.length === 0) {
            fotos = [
              {
                id: 0,
                imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg',
                idFinca: finca.id
              }
            ]
          }

          return {...finca, fotos}
        })
      )

      this.datosFincas = fincasConFotos
    } catch(error) {
      console.error('Error fetching data')
    }
  }

  editarFinca(id: number): void {
    this.router.navigate(['/edit-finca', id])
  }

  verDetalle(id: number): void {
    // lógica para redireccionar o abrir modal
    console.log('Ver detalle de finca con id:', id);
  }

  anadirFinca(): void {
    this.router.navigate(['/create-finca'])
  }
}
