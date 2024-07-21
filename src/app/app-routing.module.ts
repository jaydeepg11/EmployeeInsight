import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';

const routes: Routes = [
  {path:"Employee",component:EmployeeListComponent},
  {path:"AddEmployee/:id",component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
