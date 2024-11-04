import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Login page route
  { path: 'main', component: MainComponent } // Main landing page route
];
