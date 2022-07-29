import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-set-notes',
  templateUrl: './set-notes.component.html',
  styleUrls: ['./set-notes.component.css']
})
export class SetNotesComponent implements OnInit {
  tasks:any;
  taskid!:number;
  notes!:string;
  task!:Task;

  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }

  setnotes():void{
    this.taskService.setpriority(this.taskid, this.notes).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit(){
    this.setnotes();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }

}