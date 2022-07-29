import { Component, OnInit } from '@angular/core';
import { TaskService } from '../TaskService';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search-status',
  templateUrl: './search-status.component.html',
  styleUrls: ['./search-status.component.css']
})
export class SearchStatusComponent implements OnInit {
  task:any;
  task_ID!:number;
  status !: string;
  

  constructor(private route:ActivatedRoute,
    private router:Router, private troService:TaskService) { }

  ngOnInit() {
    
      
  }

 
  statuscheck(){
  
    this.troService.searchByStatus(this.status).subscribe(

      data => {

        this.task = data;

        console.log(this.task);

      },

      error => {

        console.log(error);

      });

    }
}

