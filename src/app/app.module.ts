import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiCallsService } from './api-calls.service';
import { HomepageComponent } from './homepage/homepage.component';
import { PincodeComponent } from './pincode/pincode.component';
import { DistrictComponent } from './district/district.component';
import { MylocationComponent } from './mylocation/mylocation.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PincodeComponent,
    DistrictComponent,
    MylocationComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
