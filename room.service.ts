import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:60623/api/rooms';

  constructor(private http: HttpClient) {}

  addRoom(room: any) {
    return this.http.post(this.apiUrl, room);
  }

  getRoomsByHotel(hotelId: number) {
    return this.http.get(`${this.apiUrl}/hotel/${hotelId}`);
  }
}