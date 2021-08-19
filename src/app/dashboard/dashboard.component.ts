import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products:Product[]=[]

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.allProduct().subscribe(
      (products)=>{
        this.products=products

      }
    )
  }

}
