import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule for routing
import { CommonModule } from '@angular/common'; // CommonModule for using Angular directives
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cmsc-447-project';
  // Inject the Router service
  constructor(public router: Router) {}

  // Method to check if the sidebar should be shown
  shouldShowSidebar(): boolean {
    const noSidebarRoutes = ['/', '/login', '/register']; // Routes where the sidebar should be hidden
    return !noSidebarRoutes.includes(this.router.url);
  }
  logout():void{
    alert('You have logged out successfully');
    
    // Redirect to the login page
    this.router.navigate(['/']);  
  }
}

