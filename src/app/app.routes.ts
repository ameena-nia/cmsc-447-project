import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserGoalsComponent } from './user-goals/user-goals.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Login page route
  //{ path: 'main', component: MainComponent }, // Main landing page route
  { path: 'dashboard', component: DashboardComponent }, // Main landing page route
  { path: 'user-goals', component: UserGoalsComponent } // Goals page route
];
