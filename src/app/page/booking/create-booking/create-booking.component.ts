import { BookingService } from '../../../service/booking.service';
import { Booking } from '../../../models/booking';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  booking: Booking = new Booking();
  submitted = false;

  constructor(private bookingService: BookingService,
    private router: Router) { }

  ngOnInit() {
  }

  newBooking(): void {
    this.submitted = false;
    this.booking = new Booking();
  }

  save() {
    this.bookingService
    .createBooking(this.booking).subscribe(data => {
      console.log(data);
      this.booking = new Booking();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    //this.router.navigate(['/detailsbooking' + ':' + this.booking.id]);
    this.router.navigate(['/bookings']);
  }
}
