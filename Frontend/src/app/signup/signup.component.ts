import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 registerUserData:any={}
  constructor( private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  signupUser(){
    this._auth.signupUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token',res.token)
        this._router.navigate(['login'])
      }
    )
   }

}
