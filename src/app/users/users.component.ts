import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() updateUser = new EventEmitter<string>();
  currentUser = '';
  users=[
    "vijay","ajay","gopal","puspa"
  ];
  constructor() { }

  ngOnInit(): void {
  }
  changedTo(user){
    this.currentUser =user;
    this.updateUser.emit(this.currentUser);
  }
  linkClass(user){
if(user == this.currentUser){
  return "active";
}
  }

}
