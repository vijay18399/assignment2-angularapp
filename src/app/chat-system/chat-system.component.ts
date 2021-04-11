import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-chat-system',
  templateUrl: './chat-system.component.html',
  styleUrls: ['./chat-system.component.css']
})
export class ChatSystemComponent implements OnInit {
  userData: string;
  myusername: string;
  username= '';
  typingUser ='ss';
  typingData ='sjsj';
  isTyping :Boolean;
  constructor() { }
  ngOnInit(): void {
    this.userData = localStorage.getItem('userInfo');
     this.myusername =  JSON.parse(this.userData)['user'];
  }
  UpdateChat(username:string){
    this.username =username;
  }

}
