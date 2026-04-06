import { Component } from '@angular/core';
import { AddRoomComponent } from './rooms/add-room.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddRoomComponent, HttpClientModule],
  templateUrl: './app.html'
})
export class AppComponent {}