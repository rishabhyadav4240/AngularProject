import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService}from 'src/app/employee-service.service';
import { IEmployee } from './employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.components.html',
 // styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit 
{
  public employees!:IEmployee[] ;
 // public errorMsg:any;
  constructor(private employeeService:EmployeeServiceService) { }
  ngOnInit()
   {
    this.employeeService.getEmployees()
      .subscribe(data => this.employees = data)
      
                 //error => this.errorMsg = error);
  }

}
