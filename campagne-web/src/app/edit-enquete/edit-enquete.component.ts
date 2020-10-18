import { Component, OnInit } from '@angular/core';
import { DemographieService } from '../services/DemographieService';
import { Router } from '@angular/router';
import { Enquete } from '../model/enquete.model';
import { ActivatedRoute } from '@angular/router';
import { CampagnevacService } from '../services/campagnevac.service';
import {EnqueteService} from '../services/enquete.service';
@Component({
  selector: 'app-edit-enquete',
  templateUrl: './edit-enquete.component.html',
  styleUrls: ['./edit-enquete.component.css']
})
export class EditEnqueteComponent implements OnInit {
 //public curentproduct: Enquete;
 public curentproduct;
  public url: string;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService, private enqueteService:EnqueteService) { }


  ngOnInit(): void {
  this.url=atob(this.activatedRoute.snapshot.params.id);
     this.capservice.getRessource1(this.url)
       .subscribe(data=>{
         //this.curentproduct=data;
         //console.log(data);
         this.enqueteService.getEnquete(data.id)
         .subscribe(res=>{
          console.log(res);
          let result = res;
          this.curentproduct=result;
         });
         },err=>{
         console.log(err);})
  }
   onUpdateEnquete(enquete) {
      this.demogService.updateEnquete(enquete);
      this.router.navigateByUrl("/t");


}
}
