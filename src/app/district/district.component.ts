import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.scss']
})
export class DistrictComponent implements OnInit {

  constructor(private service : ApiCallsService) { }

  public date:any;
  public centers:any;
  public allCenters:any=[];

  ngOnInit(): void {
  }

  public selectChangeHandler(event:any){
    this.date=event.target.value;
  }

  public onSubmit(){
      let d_id=localStorage.getItem("district_id");
      let mydate=this.date;
      let date=mydate.split('-').reverse().join('-');
      localStorage.setItem("selected_dt",date);
      this.service.getByDistrict(date,d_id).subscribe(
        data=>{
          this.centers=data;
          this.allCenters=this.centers.sessions;
          console.log(this.allCenters);
        }
      )
  }

  public onSelect(center_id:any){
    localStorage.setItem("center_id",center_id);
    
  }

}
