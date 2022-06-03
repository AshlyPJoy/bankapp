import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  psw=""

  registerForm=this.fb.group({
    acno:"",
    psw:"",
    uname:""


  })

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder
    ) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname
    var acno=this.acno
    var psw=this.psw

    const result=this.ds.register(uname,acno,psw)
    if(result){
      alert("Successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("already existing customer....Please Login")
    }
    
  }

}
