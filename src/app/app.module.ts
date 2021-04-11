import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CardComponent } from './card/card.component';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { NgGroupByPipeModule } from 'angular-pipes';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { UsersComponent } from './users/users.component';
import { ChatSystemComponent } from './chat-system/chat-system.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
const config: SocketIoConfig = { url: 'https://my-socket-api.herokuapp.com', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    CustomersComponent,
    OrdersComponent,
    CardComponent,
    CustomerComponent,
    AddCustomerComponent,
    SearchFilterPipe,
    LoginComponent,
    ChatComponent,
    UsersComponent,
    ChatSystemComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    SocketIoModule.forRoot(config),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgGroupByPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
