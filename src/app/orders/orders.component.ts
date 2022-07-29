import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
 orders!: Order[];
  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getorders().subscribe((data :Order[])=>{
      console.log(data);
      this.orders = data;
    })
  }

}
