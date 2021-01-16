import { Component, OnInit } from '@angular/core';
import { DemographieService } from '../services/DemographieService';
import { Router } from '@angular/router';
import { AppRole } from '../model/appRole.model';
import { ActivatedRoute } from '@angular/router';
import { CampagnevacService } from '../services/campagnevac.service';
import {EnqueteService} from '../services/enquete.service'
@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {
public curentproduct;
  public url: string;
   constructor(private router:Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService, private enqueteService:EnqueteService) { }


  ngOnInit(): void {
  this.url=this.activatedRoute.snapshot.params.id
       //this.capservice.getRessource1(this.url)
         //.subscribe(data=>{
           //this.curentproduct=data;
           //console.log(data);
           this.enqueteService.getRole(this.url)
           .subscribe(res=>{
            //console.log(res);
            let result = res;
            this.curentproduct=result;
              // console.log( this.curentproduct);

            //console.log(this.curentproduct.moughataas);
          // });
           },err=>{
           console.log(err);})


    }
     onUpdateRole(enquete) {
        this.demogService.updateEnquete(enquete);
        this.router.navigateByUrl("/t");


  }


}
