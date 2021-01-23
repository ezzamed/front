import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../model/appUser.model';
import { CampagnevacService } from '../services/campagnevac.service';
import { DemographieService } from '../services/DemographieService';
import {EnqueteService} from '../services/enquete.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public curentproduct;
  public url: string;
  public appRoles;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService, private enqueteService:EnqueteService) { }

    ngOnInit(): void {
    //this.url=atob(this.activatedRoute.snapshot.params.id)
    this.url=this.activatedRoute.snapshot.params.id
     this.enqueteService.getUser(this.url)
       .subscribe(data=>{
         this.curentproduct=data;
         },err=>{
         console.log(err);})
          this.capservice.onGetroles()
                           .subscribe(data=>{
                              this.appRoles=data;
                              console.log(this.appRoles);                },err=>{
                             console.log(err);
                             })
    }
    onUpdateUser(user) {
      this.demogService.updateUser(user);
      this.router.navigateByUrl("/users");



    }

}
