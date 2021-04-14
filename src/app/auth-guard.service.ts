import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthService} from './services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    Swal.fire('You are Not Allowed Please set username', 'error');
    this.route.navigate(['login']);
    return false;
  }
}	