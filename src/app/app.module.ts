import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './page/employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './page/employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './page/employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './page/employee/update-employee/update-employee.component';
import { CreateBookingComponent } from './page/booking/create-booking/create-booking.component';
import { BookingDetailsComponent } from './page/booking/booking-details/booking-details.component';
import { BookingListComponent } from './page/booking/booking-list/booking-list.component';
import { UpdateBookingComponent } from './page/booking/update-booking/update-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    CreateBookingComponent,
    BookingDetailsComponent,
    BookingListComponent,
    UpdateBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
