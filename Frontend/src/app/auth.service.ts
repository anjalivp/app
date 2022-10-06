import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  getToken() {
    return localStorage.getItem('token');
  }

  private _signupUrl = "http://localhost:3000/signup";
  private _loginUrl = "http://localhost:3000/login";



  

  loginUser(user:any){
  return this.http.post<any>(this._loginUrl,user);
  }

// signupUser(username:string,password:string):Observable<any>{
//   return this.http.post('http://localhost:3000/signup',{username,password})
// }
signupUser(user: any){
  return this.http.post<any>(this._signupUrl,user);
}
loggedIn(){
  return !!localStorage.getItem('token')
}

  constructor(private http:HttpClient) { } 
}
