import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userName:string = '';
  password:string = '';
  login() {
    alert('login successful\nusername:' +this.userName);
  }

}
