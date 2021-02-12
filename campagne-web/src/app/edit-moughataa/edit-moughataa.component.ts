import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../model/appUser.model';
import { CampagnevacService } from '../services/campagnevac.service';
import { DemographieService } from '../services/DemographieService';
import {EnqueteService} from '../services/enquete.service';
@Component({
  selector: 'app-edit-moughataa',
  templateUrl: './edit-moughataa.component.html',
  styleUrls: ['./edit-moughataa.component.css']
})
export class EditMoughataaComponent implements OnInit {

   constructor(private router: Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService, private enqueteService:EnqueteService) { }
 public curentproduct;
  public url: string;
  public appRoles;

  ngOnInit(): void {
  this.url=this.activatedRoute.snapshot.params.id
       this.enqueteService.getmoughataa(this.url)
         .subscribe(data=>{
           this.curentproduct=data;
           },err=>{
           console.log(err);})

      }
      onUpdateUser(user) {
        this.demogService.updateUser(user);
        this.router.navigateByUrl("/gestionmoughataas");



      }



}
