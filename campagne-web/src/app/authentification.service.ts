import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   host2:string="http://localhost:8080/login"
   jwt:string;
   username:string;
   roles:Array<string>;

constructor(private httpClient:HttpClient) { }

    login(data){
    return this.httpClient.post(this.host2,data,{ observe: 'response'})
    }

    saveToken(jwt: string){
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
    }
    parseJWT(){
     let jwtHelper=new JwtHelperService();
     let objJWT=jwtHelper.decodeToken(this.jwt);
     //nthis.username=objJWT.obj;
     this.roles=objJWT.roles;
    }
    isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
    }
    isUser(){
     return this.roles.indexOf('USER')>=0;
        }
     isAuthenticated(){
        return this.roles && (this.isAdmin() || this.isUser());
            }

      loadToken(){
      this.jwt=localStorage.getItem('token');
      this.parseJWT();
      }
      logout(){
      localStorage.removeItem('token');
      this.initParams();

      }
      initParams(){
         this.jwt=undefined;
            this.username=undefined;
            this.roles=undefined;
      }


}
