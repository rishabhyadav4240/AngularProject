//import {Component,OnInit} from '@angular/core';
//import {FormGroup,FormControl,Validators} from '@angular/forms';
//import { Router } from '@angular/router';
//@Component({
  //  selector :'login',
   // templateUrl:'./app.login.html'
//})
//export class Login implements OnInit{
   // form:any;
    //name:string | undefined
    //ngOnInit() {
      //  this.form=new FormGroup({
        //    firstname:new FormControl("",Validators.compose([Validators.required,Validators.minLength(2)])),
          //  lastname:new FormControl("")
            //});
        //}
        //constructor(private router:Router){}
        //onSubmit(value:any){
          //  console.log(value);
            //this.router.navigate(['/Register']);
        //}
    //}

    import { Component } from "@angular/core";

import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskService } from "./TaskService";
import { user } from "./user";
@Component({
     selector:'template-form',
     templateUrl:'./Login.html'})
     export class Login{
          User : user = new user();
          name !: string;
          password !:string;
          constructor(private router:Router,private taskservice : TaskService){}
check(value:any)
{this.name = value.name;
     this.password = value.password;
     this.taskservice.validate(this.name,this.password).subscribe(data=>
          {
               console.log(data);
               if(data==true)
                {
                      this.gotopage();
                    }if(data==false)
                     {
                          alert("Please enter Valid Credentials");

                         

                         }

                    },error=>console.log(error));}

                    gotopage(){

                         this.router.navigate(["/tasks"]);}

                    }