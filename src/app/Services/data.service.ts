import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db: any = {
    1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 50000 },
    1001: { "acno": 1001, "username": "Neil", "password": 1001, "balance": 5000 },
    1002: { "acno": 1002, "username": "Neethu", "password": 1002, "balance": 75000 }
  }

  constructor() { }

  login(acno:any,psw:any) {
    
   let db = this.db
   if (acno in db) {
     if (psw == db[acno]["password"]) {
       return true
      
     }
     else {
       alert("password incorrect")
       return false
     }
    }
    else {
     alert("user doesnt exist")
     return false

   }
 }
 register(username:any,acno:any,password:any){
   let db=this.db
   if(acno in db){
     return false
   }
   else{
     db[acno]={
       acno,
       username,
       password,
       "balance":0
     }
     return true
   }
 }
deposit(acno:any,password:any,amt:any){

  var amount=parseInt(amt)
  let db=this.db
  if(acno in db){
    if(password==db[acno]["password"]){
      db[acno]["balance"]+=amount
      return db[acno]["balance"]

    }
    else{
      alert("incorrect password")
      return false
    }
  }
  else{
    alert("user doesn't exist")
    return false
  }


}
withdraw(acno:any,password:any,amt:any){
  var amount=parseInt(amt)
  let db=this.db
  if(acno in db){
    if(password==db[acno]["password"]){
      if(db[acno]["balance"]<amount){
        alert("Insufficient balance")
        return false
      }
      else{
        db[acno]["balance"]-=amount
        return db[acno]["balance"]

      }


    }
    else{
      alert("password is incorrect")
      return false
    }

  }
  else{
    alert("user does'nt exist")
    return false
  }

}

}

