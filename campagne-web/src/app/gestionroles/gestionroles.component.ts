import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-gestionroles',
  templateUrl: './gestionroles.component.html',
  styleUrls: ['./gestionroles.component.css']
})
export class GestionrolesComponent implements OnInit {
 public appRoles;
 public curent;
  constructor(private capservice:CampagnevacService,private router:Router,private demogService:DemographieService) { }

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
  Deleterole(r){
                    let conf=confirm("etes vous sur");
                    if(conf){
                      this.demogService.deleterole(r.id);
                    }




}
Editrole(r){

                                               //console.log(d);
              //let url=a._links.self.href;
              //this.router.navigateByUrl("/edit-user/"+btoa(url));
               this.router.navigate(['edit-role/',r.id]);

                       }

}
