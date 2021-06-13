import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-mylocation',
  templateUrl: './mylocation.component.html',
  styleUrls: ['./mylocation.component.scss']
})
export class MylocationComponent implements OnInit {

  constructor(private service : ApiCallsService) { }

  public lat:any;
  public lon:any;
  public centers:any;
  public allCenters:any=[];

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation()
  {
   if('geolocation' in navigator)
   {
     navigator.geolocation.watchPosition((success)=>
     {
       this.lat=success.coords.latitude;
       this.lon =success.coords.longitude;
       this.service.getGeoLocation(this.lat,this.lon).subscribe(data=>
        {
          this.centers=data;
          this.allCenters=this.centers.centers
          console.log(this.allCenters);
        })
     })
   }
 }

}
