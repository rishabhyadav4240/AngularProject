import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { postdataObj1 } from "./postdataObj1";
@Injectable({
    providedIn:'root'
})
export class DataService1{
   // postUrl:string="http://jsonplaceholder.typicode.com/posts";
   baseUrl:string="http://localhost:8090/restaddtask";
    httpoptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json','Authorization':'my-auth-token'
        })
    };
    constructor(private httpClient:HttpClient)
    {
    }
        addPost(postD1: postdataObj1)
        {
             return this.httpClient.post(this.baseUrl,postD1,this.httpoptions);

        }

    }