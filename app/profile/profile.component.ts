import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;
  check:boolean=true;
  constructor() { 
    this.user={name:'ANJU SAJI',
  job:'Student',
    address:'98760 , River street , New York', 
  
  phone:
  ['78896544131']};
  }
togglecheck(){
  this.check=!this.check;
}
  ngOnInit() {
  }

}
