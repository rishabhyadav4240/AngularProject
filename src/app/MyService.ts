import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class MyService{
    getName():string{
        return "shyam";
    }
    getDate():string{
        return "show date";
    }
    getDetails():number{
        return 10;
    }
}