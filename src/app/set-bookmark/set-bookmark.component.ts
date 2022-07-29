import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { Task } from '../Task';
import  { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-bookmark',
  templateUrl: './set-bookmark.component.html',
  styleUrls: ['./set-bookmark.component.css']
})
export class SetBookmarkComponent implements OnInit {
tasks:any;
taskid!:number;
isbookmarked!:string;
task!:Task;
  
  constructor(private route:ActivatedRoute, private router:Router,
    private taskService:TaskService) { }

  ngOnInit(): void {
  }
  setbookmark():void{
    this.taskService.setbookmark(this.taskid, this.isbookmarked).
    subscribe(data=>console.log(data), error=>console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit(){
    this.setbookmark();
  }
  gotoList() {
    this.router.navigate(['/tasks'])
   
  }
}
