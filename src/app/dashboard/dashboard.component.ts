import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  isDialogOpen: boolean = false; // Dialog Visibility

  // Function to open the dialog
  openDialog(): void{
    this.isDialogOpen = true;
  }

  // Function to close the dialog
  closeDialog(): void{
    this.isDialogOpen = false;
  }
  
}
