import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyImageComponent } from './body-image/body-image.component';
import { BodyCardComponent } from './body-card/body-card.component';
import {ProductServices} from './services/product.services';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShopComponent } from './shop/shop.component';
import { KorpaComponent } from './korpa/korpa.component';
import {RouterModule} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {KorpaService} from './korpa/korpa.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyImageComponent,
    BodyCardComponent,
    ProductItemComponent,
    ShopComponent,
    KorpaComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: ProductItemComponent},
      {path: 'products', component: ProductDetailComponent},
      {path: 'cart', component: KorpaComponent}
    ])
  ],
  providers: [ProductServices, KorpaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
