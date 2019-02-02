import { Component, OnInit } from '@angular/core';
import {Student} from '../Student';
import {NgForm} from '@angular/forms';
import { NewservService } from '../newserv.service';
@Component({

  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
   Student = new Student();
   isRegistered=false;
   
  constructor(private newserv: NewservService) { }

  ngOnInit() {
  }
  registration(f:NgForm){
    this.newserv.store(this.Student).subscribe(data => {

    this.isRegistered=true;
    console.log("registered successfully");
    f.reset();
    },
    (err) => {
    this.isRegistered=false;
    console.log("not registered successfully");
  });

  }


}
