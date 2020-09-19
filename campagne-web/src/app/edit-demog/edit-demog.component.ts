import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Demographie } from '../model/demographie.model';
import { CampagnevacService } from '../services/campagnevac.service';
@Component({
  selector: 'app-edit-demog',
  templateUrl: './edit-demog.component.html',
  styleUrls: ['./edit-demog.component.css']
})
export class EditDemogComponent implements OnInit {
    public curentproduct:Demographie;
    public url:string;

   constructor(private router:Router,private activatedRoute:ActivatedRoute,private capservice:CampagnevacService) { }

  ngOnInit(): void {
  this.url=atob(this.activatedRoute.snapshot.params.id)
   this.capservice.getRessource(this.url)
     .subscribe(data=>{
       this.curentproduct=data;
       },err=>{
       console.log(err);})
  }
  onUpdateDemog(value:any){
  this.capservice.UpdatRessource(this.url,value)
  .subscribe(data=>{
         alert("mise a jour");
         this.router.navigateByUrl("/demogs");
         },err=>{
         console.log(err);})
  }


}
