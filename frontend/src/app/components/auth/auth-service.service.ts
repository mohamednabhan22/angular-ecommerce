import {  Observable, Subject,BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user:{}
  
  isAdmin=new BehaviorSubject<any>(!!localStorage.getItem('isAdmin'))

  isloged=new BehaviorSubject(!!localStorage.getItem('access_token'))
  error=new Subject

togleShow= new Subject<boolean>()

toglleShow(v:boolean){
  this.togleShow.next(v)
}

isAdminGuard(): boolean {
  let admin = localStorage.getItem('isAdmin');
  return (admin !== null) ? true : false;
}

 isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
}
  constructor(private router:Router,private http:HttpClient) { }



  signup(username,email,password,confirmPassword):Observable<any>{
    let data={
      username,email,password,confirmPassword
    }
 return this.http.post('signup',data)
  }

  login(email,password){
    let data={
    email,password
    }
    this.user=data
  this.http.post<any>('login',data).subscribe(

  (res)=>{
    console.log(res.isAdmin)
    localStorage.setItem('access_token', res.token)
    if(res.isAdmin==true){    localStorage.setItem('isAdmin', res.isAdmin)
    this.isAdmin.next(true)
  }
    this.isloged.next(true)

    this.router.navigate(['products'])
  },
  (err)=>{
    console.log(err)
    this.error.next(err.error.error)
    this.router.navigate(['login'])}
)
   
  }
 
  getToken() {
    return localStorage.getItem('access_token');
  }
  logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('isAdmin');

    this.isloged.next(false)
    this.isAdmin.next(false)

  }



}