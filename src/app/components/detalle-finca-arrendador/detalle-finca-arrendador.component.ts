import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { InfoFincaComponent } from '../info-finca/info-finca.component';
import { Finca } from '../../models/Finca';
import { Foto } from '../../models/Foto';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

type FincaConFotos = Finca & { fotos: Foto[] };

@Component({
  selector: 'app-detalle-finca-arrendador',
  imports: [InfoFincaComponent],
  templateUrl: './detalle-finca-arrendador.component.html',
  styleUrl: './detalle-finca-arrendador.component.css'
})
export class DetalleFincaArrendadorComponent {

  fincaSeleccionada!: FincaConFotos

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: object,
    private router: Router
  ){}

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const fincaGuardada = localStorage.getItem('fincaSeleccionada');
      if (fincaGuardada) {
        try {
          this.fincaSeleccionada = JSON.parse(fincaGuardada);
        } catch (error) {
          console.error('Error al parsear fincaSeleccionada:', error);
        }
      } else {
        console.error('No se encontró fincaSeleccionada en localStorage');
      }
    }
  }

  onSubmit() {
    this.router.navigate(['/create-solicitud'])
  }

}
