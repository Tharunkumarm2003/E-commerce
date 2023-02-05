import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { ProductsComponent } from './component/products/products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-commerce';
  public ProductList : any;
  constructor(private api : ApiService) { }

  ngOnInit(): void{
    this.api.getProduct()
    .subscribe(res=>{
      this.ProductList = res;
    })
  }

}
