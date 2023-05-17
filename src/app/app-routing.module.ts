import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { LogOutComponent } from './components/auth/log-out/log-out.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FoodItemsComponent } from './components/food-items/food-items.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'home' , component: HomeComponent},
  {path:'contactus' , component: ContactusComponent},
  {path:'aboutus' , component: AboutusComponent},
  {path:'orders', component:OrdersComponent},
  {path:'feedback', component:FeedbackComponent},
  {path: 'auth', children : [
    {path: 'login', component: LoginComponent},
    {path: 'log-out', component: LogOutComponent},
  ]},
  {path: 'food-items', component: FoodItemsComponent},
  {path:'**', component: NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
