import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
    selector :'validate',
    templateUrl:'./app.formValidate.html'
})
export class formValidation implements OnInit{
    form:any;
    name:string | undefined
    ngOnInit() {
        this.form=new FormGroup({
            firstname:new FormControl("",Validators.compose([Validators.required,Validators.minLength(3)])),
            lastname:new FormControl(""),
            languages:new FormControl("")});
        }
        onsubmit(user:any){
            console.log(user);
            this.name=user.firstname;
        }
    }
