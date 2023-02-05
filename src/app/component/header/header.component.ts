import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  total : number = 0;
  constructor(private cartservice : CartService) {}
  @Input() length: any = 0;
  ngOnInit(): void {
    // this.cartservice.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;

    // })
  }

}
