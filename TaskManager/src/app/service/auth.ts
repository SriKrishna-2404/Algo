import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ' http://localhost:5138/api/auth';

  constructor(private https: HttpClient) {}

  register(data: any) {
    return this.https.post(`${this.apiUrl}/register`, data);
  }

  login(data: any) {
    return this.https .post(`${this.apiUrl}/login`, data);
  }
}