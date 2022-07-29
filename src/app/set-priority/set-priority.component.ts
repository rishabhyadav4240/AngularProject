import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-priority',
  templateUrl: './set-priority.component.html',
  styleUrls: ['./set-priority.component.css']
})
export class SetPriorityComponent implements OnInit {
  tasks:any;
  taskid!:number;
  priority!:string;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }

  setpriority():void{
    this.taskService.setpriority(this.taskid, this.priority).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit(){
    this.setpriority();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }

}
