import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminServiceService } from '../../services/admin-service.service';
import { ArrendadorService } from '../../services/arrendador.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-signup',
  imports: [ CommonModule, FormsModule, RouterModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  title = 'signup'
  nombre = ''
  apellido = ''
  telefono = ''
  type = ''
  email = ''
  contrasena = ''

  constructor(
      private adminService: AdminServiceService,
      private arrendadorService: ArrendadorService,
      private authService: AuthServiceService,
      private router: Router
    ){}
  
    onSubmit() {
      if (this.type === 'arrendador') {
        const nuevoArrendador = {
          nombre: this.nombre,
          apellido: this.apellido,
          contrasena: this.contrasena,
          telefono: this.telefono,
          email: this.email,
        };
        this.arrendadorService.createArrendador(nuevoArrendador).then(adminCreado => {
          console.log(adminCreado);
          this.arrendadorService.login(adminCreado.email, adminCreado.contrasena)
          console.log('Arrendador autenticado:', adminCreado);
          this.authService.guardarUsuario(adminCreado)
          this.router.navigate(['/postloginArrendador']); // Redirigir a la página de arrendador
        }).catch(error => {
          if (error.response && error.response.data) {
            alert('Error: ' + error.response.data.message);
          } else {
            alert('Ocurrió un error al crear el administrador.');
          }
        });
      } else if (this.type === 'administrador') {
        const nuevoAdmin = {
          nombre: this.nombre,
          apellido: this.apellido,
          contrasena: this.contrasena,
          telefono: this.telefono,
          email: this.email,
        };
        this.adminService.createAdministrador(nuevoAdmin).then(adminCreado => {
          console.log(adminCreado);
          this.adminService.login(adminCreado.email, adminCreado.contrasena)
          console.log('Administrador autenticado: ', adminCreado)
          this.authService.guardarUsuario(adminCreado)
          this.router.navigate(['/postloginadmin'])
        }).catch(error => {
          if (error.response && error.response.data) {
            alert('Error: ' + error.response.data.message);
          } else {
            alert('Ocurrió un error al crear el administrador.');
          }
        });
      } else {
        alert('Por favor seleccione un tipo de cuenta');
      }
    }

}