import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
           
  ngOnInit(): void {
  }
  adminLogin = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email]),
        password: new FormControl('')
  })

  adminLoginForm()
  {
    console.log(this.adminLogin.value);
  }
}
