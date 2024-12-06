import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],  // Add FormsModule to imports array
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile = {
    username: '',
    email: '',
    bio: '',
    picture: '',  // Profile Picture
  };
  
  userPhotos = [];  // New array for user-uploaded photos

  defaultProfilePic = 'assets/images/default-profile-pic.png';  // Default profile picture

  ngOnInit(): void {
    this.loadProfile();
  }

  saveProfile(): void {
    if (this.profile.username && this.profile.email && this.profile.bio) {
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
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profile.picture = reader.result as string;  // Save the profile picture
      };
      reader.readAsDataURL(file);
    }
  }

  onPhotoUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userPhotos.push(reader.result as string);  // Add the new photo to the user photos array
      };
      reader.readAsDataURL(file);
    }
  }
}
