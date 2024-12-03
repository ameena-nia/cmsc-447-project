import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showPopup = false;
  newGoal: string = ''; 
  
  addGoal() {
    if (this.newGoal.trim()) {
      // Add your goal saving logic here
      console.log(`New goal added: ${this.newGoal}`);
      this.newGoal = ''; // Reset the input field
      this.showPopup = false; // Close the pop-up
    }
  }

}
