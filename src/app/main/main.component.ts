import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // for standalone components

@Component({
  selector: 'app-main',
  standalone: true, 
  imports: [CommonModule, RouterModule], // Add RouterModule
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}
  onLogout(): void {
    this.router.navigate(['/']); // If the logout button is clicked navigate to the login page
  }
}
