import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public ProductList : any;
  items:any;
  length:number=0
  constructor(private api : ApiService, private cartService : CartService) {}

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.ProductList = res;

      this.ProductList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
        
      });
    })

  }
  addtocart(item: any){
    this.cartService.addtoCart(item);

  }
  getLength() {
    this.items = localStorage.getItem('cart');
    if (this.items != null) {
      return JSON.parse(this.items).length;
    } else {
      return 0;
    }
  }
}
