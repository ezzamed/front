import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Campagne } from '../model/campagne.model';
import { CampagnevacService } from '../services/campagnevac.service';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-edit-campagne',
  templateUrl: './edit-campagne.component.html',
  styleUrls: ['./edit-campagne.component.css']
})
export class EditCampagneComponent implements OnInit {
public curentproduct:Campagne;
  public url: string;
constructor(private router: Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService) { }

  ngOnInit(): void {
   this.url=atob(this.activatedRoute.snapshot.params.id)
     this.capservice.getRessource4(this.url)
       .subscribe(data=>{
         this.curentproduct=data;
         },err=>{
         console.log(err);})
    }
    onUpdateCamp(camp) {
      this.demogService.updateCampagne(camp);
      this.router.navigateByUrl("/campagnes");



    }



}
