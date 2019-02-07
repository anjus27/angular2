import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  public StudentDetails:any=[{rollno:"1",name:"Surya",batch:"Final year",department:"MCA"},
  {rollno:"2",name:"Bhagya",batch:"Second year",department:"Btech"},
  {rollno:"3",name:"Smrithy",batch:"Third year",department:"MCA"}];
   sellstudent:any; 
addStudent(data:any)
{
this.sellstudent=data;
}

  constructor() { }

  ngOnInit() {
  }

}
