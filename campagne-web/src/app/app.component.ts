import { Component, OnInit} from '@angular/core';
import { AuthentificationService } from '../app/authentification.service';
import "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   constructor(private authservice:AuthentificationService) {}
ngOnInit(): void {
this.authservice.loadToken();

}


  title = 'campagne-web';
  isUser(){
      return this.authservice.isUser();
      }
    isAdmin(){
      return this.authservice.isAdmin();
      }
      isAuthenticated(){
      return this.authservice.isAuthenticated();
       }
       logOut(){

       this.authservice.logout();}

}
