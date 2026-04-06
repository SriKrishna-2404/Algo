import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  user = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {}

  login() {

    // 🔥 DEBUG
    console.log("Sending:", this.user);

    this.auth.login(this.user).subscribe({
      next: (res: any) => {
        console.log("Response:", res);

        if (res && res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.role);

          alert('Login successful');

          // 👉 redirect (change if needed)
          this.router.navigate(['/']);
        } else {
          alert('Invalid response from server');
        }
      },

      error: (err) => {
        console.error("Login error:", err);

        if (err.status === 401) {
          alert('Invalid email or password');
        } else {
          alert('Server error');
        }
      }
    });
  }
}