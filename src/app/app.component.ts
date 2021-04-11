import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  current = 'home'
  links=[
{
  title :"Home",
  route :"home"
},
{
  title :"Customers",
  route :"customers"
},
{
  title :"Orders",
  route :"orders"
},{
  title :"About",
  route :"about"
},
{
  title :"Chat System",
  route :"chat-system"
},
{
  title :"Products",
  route :"products"
}
  ];

  changedTo(route){
    this.current =route;
  }
  linkClass(route){
if(route == this.current){
  return "active";
}
  }
}
