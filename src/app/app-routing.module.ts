import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './page/employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './page/employee/create-employee/create-employee.component';
import { EmployeeListComponent } from './page/employee/employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './page/employee/update-employee/update-employee.component';

import { BookingDetailsComponent } from './page/booking/booking-details/booking-details.component';
import { CreateBookingComponent } from './page/booking/create-booking/create-booking.component';
import { BookingListComponent } from './page/booking/booking-list/booking-list.component';
import { UpdateBookingComponent } from './page/booking/update-booking/update-booking.component';

const routes: Routes = [
  { path: '', redirectTo: 'addbooking', pathMatch: 'full' },

  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },

  { path: 'bookings', component: BookingListComponent},
  { path: 'addbooking', component: CreateBookingComponent },
  { path: 'updatebooking/:id', component: UpdateBookingComponent },
  { path: 'detailsbooking/:id', component: BookingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
