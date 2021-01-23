import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../model/appUser.model';
import { CampagnevacService } from '../services/campagnevac.service';
import { DemographieService } from '../services/DemographieService';
import {EnqueteService} from '../services/enquete.service';
@Component({
  selector: 'app-edit-wilaya',
  templateUrl: './edit-wilaya.component.html',
  styleUrls: ['./edit-wilaya.component.css']
})
export class EditWilayaComponent implements OnInit {
public curentproduct;
  public url: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService, private enqueteService:EnqueteService) { }

  ngOnInit(): void {
   this.url=this.activatedRoute.snapshot.params.id
       this.enqueteService.getwilaya(this.url)
         .subscribe(data=>{
           this.curentproduct=data;
           },err=>{
           console.log(err);})
      }
      onUpdateWilaya(wilaya) {
        this.demogService.onUpdateWilaya(wilaya);
        this.router.navigateByUrl("/gestionwilayas");





  }

}
