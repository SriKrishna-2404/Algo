import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Room {
  id: number;
  hotelId: number;
  type: string;
  price: number;
  availableCount: number;
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  rooms: Room[];
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // 🔥 YOUR BACKEND API
  private apiUrl = 'https://localhost:7071/api/search';

  constructor(private http: HttpClient) {}

  search(location: string): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(`${this.apiUrl}?location=${location}`);
  }
}
