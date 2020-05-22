import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  editProduct = false;
  public productSelected: Product= {
    id: null,
    nombre: "",
    costo: 0,
    estado: true,
    stock: 0
  };
 // product: Product 
  constructor(private route: ActivatedRoute,
    public productService: ProductService,
    private location: Location
  ) {

  }

  ngOnInit(): void {
       this.getProduct();
}
    
  


private async getProduct(){
  const id = +this.route.snapshot.paramMap.get('id');
  const data = await this.productService.getProduct(id).toPromise();
  this.productSelected = data;
  
}

edit(){
  if (this.editProduct) {
    this.editProduct = false;
  } else {
    this.editProduct = true;
  }
}

goBack(): void {
  this.location.back();
}

save(): void {
  this.productService.updateProduct(this.productSelected)
    .subscribe(() => this.goBack());
}

}
