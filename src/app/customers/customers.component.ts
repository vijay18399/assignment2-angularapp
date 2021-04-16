import { Component, OnInit } from '@angular/core';
import { ActivationEnd } from '@angular/router';
import { Customer } from '../interfaces/customer';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getAll().subscribe((data: Customer[]) => {
      
      this.customers = data;
      console.log(this.customers);
    });
  }
  layout = 'list';
  isActive(layout){
    if(this.layout == layout ){
      return "active";
    }
  }
  ChangeTo(x){
   this.layout = x;
  }
  setClass(){
    if(this.layout == 'list'){
return("col-12")
    }
    else{
      return("col")
    }
  }
   customers = [];


}
