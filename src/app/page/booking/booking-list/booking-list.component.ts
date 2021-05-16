import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { BookingService } from "../../../service/booking.service";
import { Booking } from "../../../models/booking";
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: Observable<Booking[]>;

  constructor(private bookingService: BookingService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bookings = this.bookingService.getBookingsList();
  }

  deleteBooking(id: number) {
    this.bookingService.deleteBooking(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  bookingDetails(id: number){
    this.router.navigate(['detailsbooking', id]);
  }

  bookingUpdate(id: number){
    this.router.navigate(['updatebooking', id]);
  }
}
