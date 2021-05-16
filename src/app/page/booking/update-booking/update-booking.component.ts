import { BookingService } from '../../../service/booking.service';
import { Booking } from '../../../models/booking';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  id: number;
  booking: Booking;

  constructor(private route: ActivatedRoute,private router: Router,
    private bookingService: BookingService) { }

  ngOnInit() {
    this.booking = new Booking();

    this.id = this.route.snapshot.params['id'];

    this.bookingService.getBooking(this.id)
      .subscribe(data => {
        console.log(data)
        this.booking = data;
      }, error => console.log(error));
  }

  updateBooking() {
    this.bookingService.updateBooking(this.id, this.booking)
      .subscribe(data => {
        console.log(data);
        this.booking = new Booking();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateBooking();
  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }
}
