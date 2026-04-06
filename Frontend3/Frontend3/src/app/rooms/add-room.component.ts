import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'] 
})
export class AddRoomComponent implements OnInit {

  hotels: any[] = [];
  rooms: any[] = [];

  room = {
    hotelId: 0,
    type: '',
    price: 0,
    availableCount: 0
  };

  constructor(private roomService: RoomService, private http: HttpClient) {}

  ngOnInit() {
    
    this.http.get('http://localhost:60623/api/hotels')
      .subscribe((data: any) => {
        this.hotels = data;
      });
  }

  addRoom() {
    this.roomService.addRoom(this.room)
      .subscribe(() => {
        alert('Room added successfully');
        this.getRooms();
      });
  }

  getRooms() {
    if (this.room.hotelId) {
      this.roomService.getRoomsByHotel(this.room.hotelId)
        .subscribe((data: any) => {
          this.rooms = data;
        });
    }
  }
}