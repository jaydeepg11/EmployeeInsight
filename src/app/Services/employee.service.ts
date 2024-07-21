import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployee(id:number)
  {
    const headers = new HttpHeaders().append('header', 'value');
    const params = new HttpParams().append('id', id);
    return this.http.get("http://localhost:5109/api/Employee/getEmployee",{headers,params});
  }

  updateEmployee(employeeData:any)
  {
    return this.http.put("http://localhost:5109/api/Employee/updateEmployee",employeeData);
  }
}
