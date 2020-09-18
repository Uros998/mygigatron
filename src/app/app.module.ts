import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyImageComponent } from './body-image/body-image.component';
import { BodyCardComponent } from './body-card/body-card.component';
import {ProductServices} from './services/product.services';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyImageComponent,
    BodyCardComponent,
    ProductItemComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
