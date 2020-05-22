import { Injectable } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Injectable()
@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  @Input() product: Product = {
    id: null,
    nombre: "",
    costo: 0,
    estado: true,
    stock: 0
  };
  @Input() type = "";
  buttonName = "";

  constructor(public productService: ProductService) {
  }

  ngOnInit(): void {
    if (this.type == "create") {
      this.buttonName = "GUARDAR";
    } else {
      this.buttonName = "ACTUALIZAR";
    }
  }
  createOrUpdate(prod) {
    if (this.type == "create") {
      this.createProduct(prod);
    } else {
      this.updateProduct(prod);
    }
  }

  updateProduct(prod: Product) {
    this.productService.updateProduct(prod).subscribe(
      (result: Product) => {
        this.product = result;
     //   this.employeeService.getAllEmployee();
        alert('Producto actualizado con éxito');
    
      });
  }

  createProduct(prod: Product) {
    this.productService.addProduct(prod).subscribe(
      (result: Product) => {
        this.productService.getProducts();
        alert('Producto agregado con éxito!');
        this.clearProduct();
      });
  }

  clearProduct() {
    this.product = {
      id: null,
      nombre: "",
      costo: 0,
      estado: true,
      stock: 0
    };

  }

}
