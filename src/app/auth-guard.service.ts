import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';
import {AuthService} from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService : AuthService, private route : Router) { }

  canActivate(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    alert("You are Not Allowed Please set username");
    this.route.navigate(['login']);
    return false;
  }
}	