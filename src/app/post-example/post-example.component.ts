import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from './Data-Service';
import { postData } from './postdataObj';
@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html'
  //styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {

  data:string | undefined;
  postData:postData | undefined;
 
 public users:any=[];
  constructor(private dataService:DataService) 
  { }
  ngOnInit()  {

  }
  sendData(){
    this.postData=new postData();
    this.postData.body="test data2";
    this.postData.title="sometitle";
    this.postData.userId=13;
    this.dataService.addPost(this.postData)
    .subscribe(data=>{console.log(data)
    });
  }
}


