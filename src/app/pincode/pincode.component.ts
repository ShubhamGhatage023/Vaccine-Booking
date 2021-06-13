import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';

@Component({
  selector: 'app-pincode',
  templateUrl: './pincode.component.html',
  styleUrls: ['./pincode.component.scss']
})
export class PincodeComponent implements OnInit {

  constructor(private service : ApiCallsService) { }

  public date:any;
  public centers:any;
  public allCenters:any=[];

  ngOnInit(): void {
  }

  public selectChangeHandler(event:any){
      this.date=event.target.value;
  }

  public onSubmit(pin_val:any){
      let mydate=this.date;
      let date=mydate.split('-').reverse().join('-');
      console.log(date+" "+pin_val);
      this.service.getPincode(date,pin_val).subscribe(
        data=>{
          this.centers=data;
          this.allCenters=this.centers.sessions;
          console.log(this.allCenters);
        }
      )
  }

}
