import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
    role: 'User'
  };

  constructor(private authService: AuthService) {}

  onRegister() {
    console.log("Register clicked", this.user);

    this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log("Success:", res);
        alert("Registration successful");
      },
      error: (err) => {
        console.error("Error:", err);
        alert("Registration failed");
      }
    });
  }
}