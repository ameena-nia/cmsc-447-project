import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule to imports array
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.css']
})
export class UserPhotosComponent implements OnInit {
  profile = {
    username: '',
    email: '',
    bio: '',
    picture: ''  // Add picture property to store the profile picture (Base64)
  };

  // Define the default profile picture URL
  defaultProfilePic = 'assets/images/default-profile-pic.png';  // Change this to your placeholder image path

  ngOnInit(): void {
    this.loadProfile();  // Load profile data from local storage on page load
  }

  saveProfile(): void {
    if (this.profile.username && this.profile.email && this.profile.bio) {
      // Save profile data to local storage
      localStorage.setItem('userProfile', JSON.stringify(this.profile));
      alert('Profile saved successfully!');
    } else {
      alert('Please fill in all fields.');
    }
  }

  loadProfile(): void {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.profile = JSON.parse(savedProfile);
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];  // Get the uploaded file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profile.picture = reader.result as string;  // Store image as Base64 string
      };
      reader.readAsDataURL(file);  // Convert the image to base64
    }
  }
}
