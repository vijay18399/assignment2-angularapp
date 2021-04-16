import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  submitted=false;
  genders =['male','female']
  CustomerForm = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', Validators.required],
    gender: ['', Validators.required],
    profile: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {}
  get cc() {
    return this.CustomerForm.controls;
  }
  get stateGender() {
    return this.CustomerForm.get(['gender']);
  }
  changeGender(e) {
    this.stateGender.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  Back() {
    this.router.navigate(['/customers']);
  }
  Add() {
    this.submitted =true;
    if(this.CustomerForm.valid){
      this.apiService.create(this.CustomerForm.value).subscribe((res) => {
        console.log(res);
        if (res['status']) {
          
          Swal.fire('Customer Added Successfully', 'success')
          this.router.navigate(['/customer', res['data'].id]);
        }
      });
    }



  }
}
