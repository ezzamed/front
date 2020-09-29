import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionroles',
  templateUrl: './gestionroles.component.html',
  styleUrls: ['./gestionroles.component.css']
})
export class GestionrolesComponent implements OnInit {
 public appRoles;
 public curent;
  constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.onGetroles()
                  .subscribe(data=>{
                     this.appRoles=data;
                     console.log(this.appRoles);                },err=>{
                    console.log(err);
                    })
  }
  onSaveRole(data:any){
        this.capservice.postroles(this.capservice.host+"/appRoles",data)
        .subscribe(res=>{
        //this.router.navigateByUrl("/demogs")
        this.curent=res;
        //this.router.navigateByUrl("/users");


        },err=>{
        console.log(err);
        })
  }

}
