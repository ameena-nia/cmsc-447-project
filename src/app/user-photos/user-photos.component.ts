import { Component } from '@angular/core';

@Component({
  selector: 'app-user-photos',
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.css']
})
export class UserPhotosComponent {
  imageSrc: string | ArrayBuffer | null = null; // Variable to store the image data

  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result; // Set the image source to the result of file read
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 string
    }
  }
}
