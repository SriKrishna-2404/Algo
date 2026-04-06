import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchService, Hotel } from '../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'   // ✅ FIXED
})
export class SearchComponent {
  location: string = '';
  hotels: Hotel[] = [];

  constructor(private searchService: SearchService) {}

  search() {
    this.searchService.search(this.location).subscribe({
      next: (data) => this.hotels = data,
      error: (err) => alert(err.error)
    });
  }
}