
import {Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector:'Register',
    templateUrl:'./app.registrationComponent.html'
})
export class Registration{
    constructor(private router:Router){}
    onSubmit(value:any){
        console.log(value);
        this.router.navigate(['/Login']);
    }
}