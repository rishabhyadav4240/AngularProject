import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private baseUrl = "http://localhost:8080/restgetAlltask";
 // private baseUrl1 = "http://localhost:8080/restaddtask";
  constructor(private httpClient:HttpClient) { }

  getTaskList():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }
  setpriority(taskid: number,priority:string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/setpriority/${taskid}/${priority}`);
  }
  setnotes(taskid: number,notes:string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/setnotes/${taskid}/${notes}`);
  }
  setbookmark(taskid: number,isbookmarked:string): Observable<any> {
    return this.httpClient.get(`http://localhost:8080/assignbookmark/${taskid}/${isbookmarked}`);
  }

  searchByStatus(status:string): Observable<any> {

  return this.httpClient.get(`http://localhost:8080/restgetAlltask/${status}`);

}

validate(userName: string,password:string): Observable<any> {
  return this.httpClient.get(`http://localhost:8080/user/${userName}/${password}`);
  
}

  
createTask(task:Object):Observable<Object>{
  return this.httpClient.post(`http://localhost:8080/restaddtask`,task);
 
  }
}




