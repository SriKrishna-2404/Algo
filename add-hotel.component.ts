import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HotelService } from '../Service/hotel.service';

@Component({
  selector: 'app-add-hotel',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-hotel.component.html'
})
export class AddHotelComponent {
  hotel = { name: '', location: '' };

  constructor(private hotelService: HotelService) {}

  addHotel() {
  console.log(this.hotel); // 👈 ADD THIS

  this.hotelService.addHotel(this.hotel).subscribe({
    next: (res) => {
      console.log("SUCCESS", res);
      alert('Hotel Added Successfully');
    },
    error: (err) => {
      console.error("ERROR", err);
      alert('Error occurred');
    }
  });
}
}