import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
constructor(private route:ActivatedRoute,private service : EmployeeService,private fb:FormBuilder){}
  id!:number;
  EmployeeData!:FormGroup;
  data:any={};

ngOnInit(): void {
  this.EmployeeData=this.fb.group({
    employeeID:['',Validators.required],
    name:['',[Validators.required]],
    teamID:['',[Validators.required]]
    }) 
    
  this.id=this.route.snapshot.params["id"]; 
  this.service.getEmployee(this.id).subscribe((res)=>{
   this.data=res;

   this.EmployeeData=this.fb.group({
    employeeID:[this.data.employeeID],
    name:[this.data.name],
    teamID:[this.data.teamID]
    }) 
  });
  }

  submit(){
    console.log(this.EmployeeData.value);
    this.service.updateEmployee(this.EmployeeData).subscribe(res=>{
      console.log("Success");
    })
  }


}

