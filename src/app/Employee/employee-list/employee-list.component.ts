import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  EmployeeData:any;
  constructor(private service:EmployeeService){

  }
  
  ngOnInit(): void {
    this.service.getEmployee(0).subscribe(res=>{
      this.EmployeeData = res;
    })
  }

}
