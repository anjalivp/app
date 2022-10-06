import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router) { }

  title:String = "LIBRARY APP"
  ngOnInit(): void {
  }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate([''])
    alert("You are logged out")
  }

}
