import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList : any =[]
  // public productList = new BehaviorSubject<any>([]);

//   constructor() { }
//   getProducts(){
//     return this.productList.asObservable();
//   }
//   setProduct(Product : any){
//     this.cartItemList.push(...Product);
//     this.productList.next(Product);
//   }
getcart(){
  console.log(JSON.parse(localStorage.getItem('cart')||"{}"))
  return JSON.parse(localStorage.getItem('cart')||"{}")
}
  addtoCart(Product : any){
    this.cartItemList.push(Product);
    localStorage.setItem('cart',JSON.stringify(this.cartItemList))
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    console.log(this.cartItemList)
  }
//   getTotalPrice(){
//     let grandTotal = 0;
//     this.cartItemList.map((a:any)=>{
//       grandTotal += a.total;
//     })
//   }
//   removeCartItem(Product: any){
//     this.cartItemList.map((a:any, index:any)=>{
//       if(Product.id=== a.id){
//         this.cartItemList.splice(index,1);
//       }
//     })
//   }
//   removeAllCart(){
//     this.cartItemList = []
//     this.productList.next(this.cartItemList);
//   }
}
