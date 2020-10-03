import { Component, OnInit } from '@angular/core';
import { DemographieService } from '../services/DemographieService';
import { Router } from '@angular/router';
import { Enquete } from '../model/enquete.model';
import { ActivatedRoute } from '@angular/router';
import { CampagnevacService } from '../services/campagnevac.service';
@Component({
  selector: 'app-edit-enquete',
  templateUrl: './edit-enquete.component.html',
  styleUrls: ['./edit-enquete.component.css']
})
export class EditEnqueteComponent implements OnInit {
 public curentproduct: Enquete;
  public url: string;
  constructor(private router:Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService) { }


  ngOnInit(): void {
  this.url=atob(this.activatedRoute.snapshot.params.id)
     this.capservice.getRessource1(this.url)
       .subscribe(data=>{
         this.curentproduct=data;
         },err=>{
         console.log(err);})
  }
   onUpdateEnquete(enquete) {
      this.demogService.updateEnquete(enquete);
      this.router.navigateByUrl("/t");


}
}
