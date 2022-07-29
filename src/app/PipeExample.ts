import { Component } from "@angular/core";

@Component({

    selector:"pipe-com",

    templateUrl:"./PipeExample.html"

})

export class PipeExample{

name="SONATA";

    day=new Date();
    arr=[10,60,30,1];
    price=500;

}