import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FeedbackComponent } from './components/feedback/feedback.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    AboutusComponent,
    FoodItemsComponent,
    CartComponent,
    HomeComponent,
    NotFoundComponent,
    OrdersComponent,
    FeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
