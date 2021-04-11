import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../interfaces/customer';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  editMode = false;
  viewMode = true;
  id: number;
  customer : Customer;
  CustomerForm :Object;
  constructor(private fb: FormBuilder,private apiService: ApiService,private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.apiService.getById(this.id).subscribe((data) => {
        this.customer = data;
        this.CustomerForm =  this.fb.group({
          full_name:  [this.customer.full_name, Validators.required],
          email:  [this.customer.email, Validators.required],
          gender:  [this.customer.gender, Validators.required],
          profile:  [this.customer.profile, Validators.required],
        });
      });
   });
  }
  Back(){
    this.router.navigate(['/customers']);
  }
  Edit(){

    this.editMode =true;
    this.viewMode = false;
  }
  Update(){
    console.log(this.CustomerForm['value'])
    this.apiService.update(this.id,this.CustomerForm['value']).subscribe(res => {
     console.log(res);
    });
    this.editMode =false;
    this.viewMode = true;
  }


}
