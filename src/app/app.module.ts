import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { BtnStylesDirective } from './directives/btn-styles.directive';
import {CutTextPipe} from "./pipes/cut-text.pipe";
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import {ProductService} from "./services/product.service";
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    AdvantageComponent,
    BtnStylesDirective,
    CutTextPipe,
    PhoneFormatPipe,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent, CartComponent]
})
export class AppModule { }
