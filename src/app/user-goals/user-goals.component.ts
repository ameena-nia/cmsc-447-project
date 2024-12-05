import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-user-goals',
  standalone: true,  // Standalone component
  imports: [FormsModule],  // Import FormsModule
  templateUrl: './user-goals.component.html',
  styleUrls: ['./user-goals.component.css']
})
export class UserGoalsComponent {
  goalInput: string = ''; // Temporary variable to bind user input
  selectedTab: string = 'in-progress'; // Track which tab is selected
  inProgressGoals: string[] = []; // Goals that are in progress
  completedGoals: string[] = []; // Goals that are completed

  // Method to add a new goal to the 'In Progress' list
  addGoal(): void {
    if (this.goalInput.trim()) {
      this.inProgressGoals.push(this.goalInput.trim());  // Add goal to 'In Progress' list
      this.goalInput = '';  // Reset input field after adding
    }
  }

  // Method to delete a goal from either list
  deleteGoal(list: string[], index: number): void {
    list.splice(index, 1);  // Remove the goal from the array
  }

  // Method to move a goal from In Progress to Completed
  markAsCompleted(index: number): void {
    const goal = this.inProgressGoals.splice(index, 1)[0]; // Remove the goal from In Progress
    this.completedGoals.push(goal);  // Add it to the Completed list
  }

  // Method to move a goal from Completed back to In Progress
  markAsInProgress(index: number): void {
    const goal = this.completedGoals.splice(index, 1)[0]; // Remove the goal from Completed
    this.inProgressGoals.push(goal);  // Add it back to the In Progress list
  }

  // Set the selected tab
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
