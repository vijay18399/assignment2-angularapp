import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Message } from '../interfaces/message';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() currentUser: string;
  @Output() Typing = new EventEmitter<Object>();
  @Output() NTyping = new EventEmitter<Object>();
  data = {
    from: '',
    message: '',
    date:null,
  };
  messages = [];

  constructor(private router: Router, private apiService: ApiService,private socket: Socket) {}
  
  ngOnInit() {
    this.getMessages();
    console.log(this.messages)
    this.data.from = this.currentUser;
    this.socket.connect(); 
    this.socket.fromEvent('message').subscribe(data => {
      console.log(data);
      this.messages.push(data);
    });

  }
 getMessages(){
  this.apiService.getMessages().subscribe((data) => {
    this.messages = data;
  });
 }
  sendMessage() {
    this.data.date =new Date();
    this.socket.emit('message', this.data);
    this.data.message = '';
  }
 

 



}
