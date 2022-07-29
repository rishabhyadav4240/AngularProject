import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   private baseURL : String= "https://0bcd-45-115-104-168.in.ngrok.io/api/v1/order/list"
  

  constructor(private http: HttpClient) { }

   getorders(): Observable<Order[]>{
     return this.http.get<Order[]>(`${this.baseURL}`,{ headers: new HttpHeaders({ "Access-Control-Allow-Origin": "*",
     'Content-Type':'application/json' }) })

}}

