import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector :"Login",
    templateUrl:"./app.formlogin.html"
})

export class FormLogin{
    onSubmit(value:any){
        console.log(value);
    }
}