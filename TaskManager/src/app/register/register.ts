import { Component } from '@angular/core';
import { AuthService } from '../service/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  imports: [FormsModule],
  providers: [AuthService]
})
export class RegisterComponent {

  user = {
    username: '',
    email: '',
    password: ''
  };

  resetForm() {
    this.user.username = '';
    this.user.email = '';
    this.user.password = '';
  };

  constructor(private auth: AuthService) {}

  register() {
    this.auth.register(this.user).subscribe((res) => {
      console.log(res);
    });
  }
}