import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Finca } from '../../models/Finca';
import { FincaService } from '../../services/finca.service';
import { FotoService } from '../../services/foto.service';
import { Foto } from '../../models/Foto';
import { Router } from '@angular/router';

type FincaConFotos = Finca & {fotos: Foto[]}

@Component({
  selector: 'app-show-fincas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-fincas.component.html',
  styleUrls: ['./show-fincas.component.css']
})
export class ShowFincasComponent implements OnInit {
  datosFincas: FincaConFotos[] = [];

  constructor(
    private fincaService: FincaService,
    private fotoService: FotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarFincas();
  }

  async cargarFincas() {
    try {
      const fincas = await this.fincaService.getFincas()

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

  verDetalles(finca: FincaConFotos) {
    localStorage.setItem('fincaSeleccionada', JSON.stringify(finca));
    console.log('Finca seleccionada:', finca);
    this.router.navigate(['/detalle-finca-arrendador']);
  }

}
