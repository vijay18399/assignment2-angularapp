import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInUserInfo : {};
  constructor(private http : HttpClient) { }


  public isAuthenticated() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }
  
  public validate(username) {
    return this.http.post('https://mydummy-flask-api.herokuapp.com/api/setuser', {'username' : username }).toPromise()
  }
}