import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ShowFincasComponent } from './components/show-fincas/show-fincas.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { PostloginarrendadorComponent } from './components/postloginarrendador/postloginarrendador.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { PostloginadminComponent } from './components/postloginadmin/postloginadmin.component'; // Asegúrate de importar el componente correcto para el administrador
import { ShowfincasadminComponent } from './components/showfincasadmin/showfincasadmin.component'; // Asegúrate de importar el componente correcto para el administrador
import { CreateFincaComponent } from './components/create-finca/create-finca.component';
import { CreateSolicitudComponent } from './components/create-solicitud/create-solicitud.component';
import { InfoFincaComponent } from './components/info-finca/info-finca.component';
import { EditFincaComponent } from './components/edit-finca/edit-finca.component';

export const routes: Routes = [
    { path: '', component: LandingComponent},
    { path: 'fincas', component: ShowFincasComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'solicitudes', component: SolicitudesComponent },
    {path:'postloginArrendador' ,component: PostloginarrendadorComponent},
    {path:'postloginadmin' ,component: PostloginadminComponent},
    { path: 'showfincasadmin', component: ShowfincasadminComponent },
    { path: 'create-finca', component: CreateFincaComponent},
    { path: 'create-solicitud', component: CreateSolicitudComponent},
    { path: 'detalle-finca', component: InfoFincaComponent},
    { path: 'edit-finca', component: EditFincaComponent }
];
