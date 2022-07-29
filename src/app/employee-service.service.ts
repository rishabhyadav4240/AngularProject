import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import {share} from 'rxjs/operators'
//import{course} from './course';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  //baseUrl:string = "https://jsonplaceholder.typicode.com/users";
  private url: string = "/assets/data/employees.json";
 //private url:string="http://localhost:3000/employees";
 //private url1:string="http://localhost:8088/show";
 
   constructor(private http:HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);  
  }
  /*errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

  getUsers():any{
   return this.http.get(this.baseUrl);
  }

  getCourse():Observable<course[]>{
    return this.http.get<course[]>(this.url)
    .pipe(share());*/
  }

