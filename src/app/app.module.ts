import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormProductComponent } from './form-product/form-product.component';
import {filterSearch} from './filterSearch.pipes';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    FormProductComponent,
    filterSearch
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
