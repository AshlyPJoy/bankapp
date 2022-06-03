import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Perfect Banking Partner"
  accno = "Accountnumber please"
  acno = ""
  psw = ""
 
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
 
  login() {
    

    var acno = this.acno
    var psw = this.psw

    const result=this.ds.login(acno,psw)

  
   if (result) {
    
       alert("login successful")
       this.router.navigateByUrl('dashboard')
     
 }
}
}


  //Template reference

//    login(a:any,p:any) {
    

//      var acno = a.value
//      var psw = p.value

//     let db = this.db
//     if (acno in db) {
//       if (psw == db[acno]["password"]) {
//         alert("login successful")
//       }
//       else {
//         alert("password incorrect")
//       }
//      }
//      else {
//       alert("user doesnt exist")

//     }
//   }
// }


