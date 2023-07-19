import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users:any=[];
  selectProduct:string='';
  addUser(myname:any)
  {
  
    this.users.push(myname.value); 
    
    }

    onDelete(deleteuser:any)
    {

        this.users.splice(deleteuser,1);
    }
    getValue(val:any){
      //  console.log(val.target.value); 
       this.selectProduct =val.target.value;
    }
}
