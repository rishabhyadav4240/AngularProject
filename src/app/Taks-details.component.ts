import { Component, OnInit } from '@angular/core';
import { TaskService } from './TaskService';
import { Task } from './Task';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
    selector: 'app-Task-details',
    templateUrl: './Task-details.component.html',
  })
  export class TaskDetailsComponent implements OnInit {

    task !:Task ;
    taskId !: number;

    constructor(private TaskService:TaskService,private route:ActivatedRoute,private Router:Router) { }

    ngOnInit() {
      this.task = new Task();
      this.taskId = this.route.snapshot.params['taskId'];

     
    }
    list(){
      this.Router.navigate(['/tasks'])
    } 
    
    
}