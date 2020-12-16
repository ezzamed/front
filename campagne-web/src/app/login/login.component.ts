import { Component, OnInit } from '@angular/core';
import "rxjs";
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice:AuthentificationService,private router:Router) {}
  ngOnInit(): void {

}
  onLogin(data){
  this.authservice.login(data)
  .subscribe(resp=>{
  let jwt=resp.headers.get('Authorization');
  this.authservice.saveToken(jwt);
  this.router.navigateByUrl("/demogs");
  },
  err=>{

  })
  }
  isUser(){
  return this.authservice.isUser();
  }
isAdmin(){
  return this.authservice.isAdmin();
  }
  isAgent(){
    return this.authservice.isAgent();
    }


  }

