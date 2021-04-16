import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';
import { Message } from '../interfaces/message';
import { Order } from '../interfaces/order';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private apiServer = "https://mydummy-flask-api.herokuapp.com";
  //  private apiServer = "http://127.0.0.1:5000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(Customer): Observable<Customer> {
    console.log(Customer);
    return this.httpClient.post<Customer>(this.apiServer + '/api/customers', Customer, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Customer> {
    return this.httpClient.get<Customer>(this.apiServer + '/api/customer/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id, Customer): Observable<Customer> {
    console.log(id);
    console.log(Customer);
    return this.httpClient.post<Customer>(this.apiServer + '/api/customer/' + id, Customer, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiServer + '/api/customers')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiServer + '/api/users')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>('https://my-socket-api.herokuapp.com' + '/messages/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiServer + '/api/orders')
    .pipe(
      catchError(this.errorHandler)
    )
  }





  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}
