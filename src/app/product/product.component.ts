import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {filterSearch} from '../filterSearch.pipes';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: Product[];
  newProduct = false;
  search:string = '';
  buttonName = 'Agregar';

  constructor(public productService: ProductService) {

  }

  ngOnInit(): void {
    this.getProducts();

  }

  getProducts() {
    this.productService.getProducts();
  }

  filtrar(value: any): void {

  }

  add(): void {
    if (this.newProduct) {
      this.newProduct = false;
      this.buttonName = 'Agregar';
    } else {
      this.newProduct = true;
      this.buttonName = 'Cerrar';
    }
  }
  delete(id: number) {
    if (confirm('¿Está seguro que desea eliminar el producto?')) {
      this.productService.deleteProduct(id).subscribe(
        (data) => {
          this.getProducts();
          alert('Producto eliminado correctamente');
        });
    }
  }


}
