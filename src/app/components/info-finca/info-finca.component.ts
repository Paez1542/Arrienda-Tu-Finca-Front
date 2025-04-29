import { Component, EventEmitter, Inject, Input, Output, PLATFORM_ID } from '@angular/core';
import { Finca } from '../../models/Finca';
import { Foto } from '../../models/Foto';
import { Router } from '@angular/router';
import { FotoService } from '../../services/foto.service';
import { DepartamentoService } from '../../services/departamento.service';
import { MunicipioService } from '../../services/municipio.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Departamento } from '../../models/Departamento';
import { Municipio } from '../../models/Municipio';
import { Solicitud } from '../../models/Solicitud';

type FincaConFotos = Finca & { fotos: Foto[] };

@Component({
  selector: 'app-info-finca',
  imports: [CommonModule],
  templateUrl: './info-finca.component.html',
  styleUrl: './info-finca.component.css'
})
export class InfoFincaComponent {
  @Input() fincaSeleccionada!: FincaConFotos;
  @Input() mostrarBotonSolicitar: boolean = false;
  @Output() solicitar = new EventEmitter<void>();

  departamento!: Departamento;
  municipio!: Municipio;

  constructor(
    private departamentoService: DepartamentoService,
    private municipioService: MunicipioService
  ) {}

  async ngOnInit() {
    if (this.fincaSeleccionada.idDepartamento !== null) {
      this.departamento = await this.departamentoService.getDepartamentoById(this.fincaSeleccionada.idDepartamento);
    }
    if (this.fincaSeleccionada.idMunicipio !== null) {
      this.municipio = await this.municipioService.getMunicipioById(this.fincaSeleccionada.idMunicipio);
    }
  }

  onSolicitar() {
    this.solicitar.emit();
  }


}
