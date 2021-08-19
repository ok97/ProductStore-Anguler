import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title='';
  description='';
  price='';
  image='';

  constructor(private productService: ProductService,private router:Router) { }

  ngOnInit(): void {   

  }
  submit():void{
      const data={
        title : this.title,
        description : this.description,
        price : this.price,
        image : this.image
      }
      this.productService.addProduct(data).subscribe(
        ()=>{
          
          this.router.navigate(['/admin/products'])
          alert("Product Added Successfully")

        }
      )
  }

}
