import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BookingComponent} from './booking/booking.component';
import { PincodeComponent } from './pincode/pincode.component';
import { DistrictComponent } from './district/district.component';
import { MylocationComponent } from './mylocation/mylocation.component'


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'booking',component:BookingComponent,children:[
      {path:'pincode',component:PincodeComponent},
      {path:'district',component:DistrictComponent},
      {path:'mylocation',component:MylocationComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
