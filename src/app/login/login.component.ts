import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm = this.fb.group({
    username: ['', Validators.required]
  });
  constructor(private fb: FormBuilder,private authService : AuthService, private router : Router) { }

  ngOnInit() {

  }

  login(){
  
    this.authService.validate(this.LoginForm.value.username)
    .then((response) => {
      console.log(response);
      if(response['status']){
        this.authService.setUserInfo({'user' : response['user']});
        this.router.navigate(['home']);
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
          });
      }
      

    })
    .catch((error) => {
      console.log(error.message);
    })
  }


}
