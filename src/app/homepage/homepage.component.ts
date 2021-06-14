import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private service : ApiCallsService, private router : Router) { }

  public states:any=[];
  public allStates:any=[];
  public selectedState:any;

  public districts:any=[];
  public allDistricts:any=[];
  public selectedDistrict:any;

  ngOnInit(): void {
    this.service.getStates().subscribe(data=>{
      console.log(data);
      this.states=data;
      this.allStates=this.states.states;
    })
  }

  public selectChangeHandler(event:any) {
    this.selectedState = event.target.value;
    this.service.getDistricts(this.selectedState).subscribe(
      data=>{
        console.log(data);
        this.districts=data;
        this.allDistricts=this.districts.districts;
      }
    )
  }

  public selectChangeHandler2(event:any) {
    this.selectedDistrict = event.target.value;
    localStorage.setItem("district_id", this.selectedDistrict);
  }

  public onGo(){
    this.router.navigate(['/booking']);
  }

}
