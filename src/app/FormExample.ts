import {Component,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
    selector:'template-form',
    templateUrl:'./app.formComponent.html'
})
export class FormExample{
    constructor(private router:Router){}
    onSubmit(value:any){
        console.log(value);
        this.router.navigate(['/validate']);
    }
}