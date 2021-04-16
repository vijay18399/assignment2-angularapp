import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted=false;
  id: number;
  customer : Customer;
  CustomerForm :FormGroup;
  genders =['male','female']
  constructor(private fb: FormBuilder,private apiService: ApiService,private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.apiService.getById(this.id).subscribe((data) => {
        console.log(data);
        this.customer = data;
        this.CustomerForm =  this.fb.group({
          full_name:  [this.customer['full_name'], Validators.required],
          email:  [this.customer['email'], Validators.required],
          gender:  [this.customer['gender'], Validators.required],
          profile:  [this.customer['profile'], Validators.required],
        });
      });
   });
  }
  get stateGender() {
    return this.CustomerForm.get(['gender']);
  }
  changeGender(e) {
    this.stateGender.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  get cc() {
    return this.CustomerForm.controls;
  }
  Back(){
    this.router.navigate(['/customers']);
  }
  Edit(){

    this.editMode =true;
    this.viewMode = false;
  }
  Update(){
    this.submitted =true;
    console.log(this.CustomerForm['value'])
    if(this.CustomerForm.valid){
      this.apiService.update(this.id,this.CustomerForm['value']).subscribe(res => {
        this.customer=res['data'];
       console.log(res['data']);
      });
      this.editMode =false;
      this.viewMode = true;
    }
 
  }


}
