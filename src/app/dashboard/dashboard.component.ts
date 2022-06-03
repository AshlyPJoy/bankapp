import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  psw=""
  depositamount=""

  acno1=""
  psw1=""
  wamount=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    
    var acno=this.acno
    var psw=this.psw
    var amount=this.depositamount

    const result=this.ds.deposit(acno,psw,amount)

    if(result){
      alert("deposited successfully and new balance is :"+result)
    }
  }
  withdraw(){
    
    var acno=this.acno1
    var psw =this.psw1
    var amount=this.wamount

    const result=this.ds.withdraw(acno,psw,amount)
    if(result){
      alert("debited successfully and new balance is :"+result)
    }
  }

}
