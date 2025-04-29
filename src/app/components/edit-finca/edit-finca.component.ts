import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-finca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-finca.component.html',
  styleUrls: ['./edit-finca.component.css']
})
export class EditFincaComponent implements OnInit {
  editFincaForm: FormGroup;
  departamento: Array<{ id: number; nombre: string }> = [];
  municipio: Array<{ id: number; nombre: string }> = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Inicializa el formulario reactivo con validaciones
    this.editFincaForm = this.fb.group({
      nombre: ['', Validators.required],
      ingreso: ['', Validators.required],
      descripcion: ['', Validators.required],
      habitaciones: [0, [Validators.required, Validators.min(1)]],
      banos: [0, [Validators.required, Validators.min(1)]],
      mascotas: [null, Validators.required],
      piscina: [null, Validators.required],
      asador: [null, Validators.required],
      valor: [0, [Validators.required, Validators.min(1)]],
      departamentoSeleccionado: ['', Validators.required],
      municipioSeleccionado: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Cargar departamentos y municipios desde la base de datos
    this.loadDepartamentos();
    this.loadMunicipios();

    
  }

  // Método para cargar departamentos desde la base de datos
  loadDepartamentos(): void {
    this.getDepartamentos().subscribe((data) => {
      this.departamento = data;
    });
  }

  // Método para cargar municipios desde la base de datos
  loadMunicipios(): void {
    this.getMunicipios().subscribe((data) => {
      this.municipio = data;
    });
  }

  // Simulación de un servicio HTTP para obtener departamentos
  getDepartamentos(): Observable<Array<{ id: number; nombre: string }>> {
    return this.http.get<Array<{ id: number; nombre: string }>>('/api/departamentos');
  }

  // Simulación de un servicio HTTP para obtener municipios
  getMunicipios(): Observable<Array<{ id: number; nombre: string }>> {
    return this.http.get<Array<{ id: number; nombre: string }>>('/api/municipios');
  }

  

  // Método para manejar la actualización de la finca
  onUpdate(): void {
    if (this.editFincaForm.valid) {
      console.log('Datos del formulario:', this.editFincaForm.value);
      // Aquí puedes enviar los datos al backend para actualizar la finca
    } else {
      console.log('Formulario inválido. Por favor, completa todos los campos requeridos.');
    }
  }

  // Método para manejar la eliminación de la finca
  eliminarFinca(): void {
    console.log('Finca eliminada');
    // Aquí puedes implementar la lógica para eliminar la finca
  }
}