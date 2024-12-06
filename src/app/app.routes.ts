import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserGoalsComponent } from './user-goals/user-goals.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { UserPhotosComponent } from './user-photos/user-photos.component';
import { UserProgressComponent } from './user-progress/user-progress.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, 
    /*
    children: [
      { path: '', component: DashboardMainComponent, outlet: 'main' },
      { path: '', component: DashboardRightComponent, outlet: 'right' },
    ],
    */
  },
  { path: 'user-goals', component: UserGoalsComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-progress', component: UserProgressComponent },
  { path: 'user-reviews', component: UserReviewsComponent },
  { path: 'user-photos', component: UserPhotosComponent },
  { path: 'logout', component: LogoutComponent },

];
