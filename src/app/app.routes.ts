import { Routes } from '@angular/router';
import { InscriptionFormComponent } from './features/inscription/components/inscription-form/inscription-form.component';
import { ConnexionFormComponent } from './features/connexion/components/connexion-form/connexion-form.component';
import { ForgotPasswordFormComponent } from './features/forgot-password/components/forgot-password-form/forgot-password-form.component';
import { MainLayoutComponent } from './features/layout/components/main-layout/main-layout.component';

export const routes: Routes = [
  { path: 'login', component: ConnexionFormComponent },
  { path: 'register', component: InscriptionFormComponent },
  { path: 'forgot-password', component: ForgotPasswordFormComponent },
  {
    path: '',
    component: MainLayoutComponent,
  },
  { path: '**', redirectTo: '/login' },
];
