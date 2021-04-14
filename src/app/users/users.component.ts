import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() updateUser = new EventEmitter<string>();
  currentUser = '';
  users=[ ];
  status = false;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getMessages().subscribe((data) => {
      this.status = true;
    });
    this.apiService.getUsers().subscribe((data) => {
      console.log(data)
      this.users = data;
    });
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
