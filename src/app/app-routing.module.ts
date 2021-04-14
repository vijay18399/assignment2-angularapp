import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { ChatSystemComponent } from './chat-system/chat-system.component';
import { ProductsComponent } from './products/products.component';
import { ResumeComponent } from './resume/resume.component';
import { BingoComponent } from './bingo/bingo.component';
const routes: Routes = [
  { path: "home", component: HomeComponent , canActivate : [AuthGuard] },
  { path: "about", component: AboutComponent , canActivate : [AuthGuard] },
  { path: "customers", component: CustomersComponent , canActivate : [AuthGuard] },
  { path: "products", component: ProductsComponent , canActivate : [AuthGuard] },
  { path: "customer/:id", component: CustomerComponent , canActivate : [AuthGuard] }, 
  { path: "add-customer", component: AddCustomerComponent, canActivate : [AuthGuard] },
  { path: "chat-system", component: ChatSystemComponent, canActivate : [AuthGuard] },
  { path: "resume", component: ResumeComponent, canActivate : [AuthGuard] },
  { path: "orders", component: OrdersComponent , canActivate : [AuthGuard] },
  { path: "bingo", component: BingoComponent , canActivate : [AuthGuard] },
  { path: "login", component: LoginComponent  },
  {
    path: "", component: HomeComponent , canActivate : [AuthGuard] 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
