import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private http:HttpClient) { }

  public getStates(){
    return this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states');
  }

  public getDistricts(s_id:any){
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${s_id}`);
  }

  public getGeoLocation(lat:any,lon:any){
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/centers/public/findByLatLong?lat=${lat}&long=${lon}`);
  }

  public getPincode(date:any,pincode:any){
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`);
  }

  public getByDistrict(date:any,d_id:any){
    return this.http.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${d_id}&date=${date}`);
  }

}
