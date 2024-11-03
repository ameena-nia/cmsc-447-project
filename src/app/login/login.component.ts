import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  onLogin(): void {
    // Capture input values and validation logic can be added here
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (username === 'testuser' && password === 'password123') {
      alert('Login successful!');
      this.router.navigate(['/main']); // Navigate to the main page
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
}
