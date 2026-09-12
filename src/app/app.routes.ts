import { Routes } from '@angular/router';
import { InscriptionFormComponent } from './features/inscription/components/inscription-form/inscription-form.component';

export const routes: Routes = [
  { path: 'inscription', component: InscriptionFormComponent },
  { path: '', redirectTo: '/inscription', pathMatch: 'full' },
  { path: '**', redirectTo: '/inscription' }
];
