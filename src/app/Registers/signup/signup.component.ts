import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    name :string ='rane';
    empId = 23;
   newUserAllow =false;
   newUserCreated ="No user is created";
   CompanyName ='';
   TechName ="javaCore";
   isValid:boolean =false;
   
   structDirectives(){
    this.isValid=true;
   }

   getOfficeName(name:any)
   {
     console.log(name)
   }

  getCompanyName(event:Event)
  {
    this.CompanyName = (<HTMLInputElement>event.target).value
  }

   userCreated()
   {
     this.newUserCreated ="user is created";
   }

   getUserEnable()
   {
    this.newUserAllow =false;
   }

    getIdFromName()
    {
     return this.empId
    }

}
