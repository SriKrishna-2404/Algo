import { Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel.component/add-hotel.component';
import { HotelListComponent } from './hotel-list.component/hotel-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'hotels', pathMatch: 'full' },
  { path: 'hotels', component: HotelListComponent },
  { path: 'add-hotel', component: AddHotelComponent }
];