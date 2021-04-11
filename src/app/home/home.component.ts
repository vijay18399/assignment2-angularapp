import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  userData ='';
  username = '';
  ngOnInit(): void {
     this.userData = localStorage.getItem('userInfo');
     this.username =  JSON.parse(this.userData)['user'];
  }

}
