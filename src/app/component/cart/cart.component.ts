import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItem:any[]=[]
  public totalItem : number = 0;
  constructor(private cartservice : CartService) {}
  ngOnInit(): void {
    // this.cartservice.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;

    // })
    this.Cart()
  }
  Cart(){
    this.cartItem=this.cartservice.getcart()
    this.totalItem=this.cartItem.length
  }
}

