import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService1} from './Data-Service1';
import { postdataObj1 } from './postdataObj1';
@Component({
  selector: 'app-post-casestudy',
  templateUrl: './post-casestudy.component.html',
  styleUrls: ['./post-casestudy.component.css']
})

export class PostCasestudyComponent implements OnInit {
  data:string | undefined;
  postData:postdataObj1| undefined;
  public users:any=[];
  constructor(private dataService:DataService1)
  { }
  ngOnInit()  {
  }
  sendData(){
    this.postData=new postdataObj1();
    this.postData.taskname="test data2";
    this.postData.description="sometitle";
    this.postData.status="available";
    this.postData.ownerid=13;
    this.dataService.addPost(this.postData).subscribe(data=>{console.log(data)
    });

  }

}