import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  credentials = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.credentials)
  }

}
