import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Campagne } from '../model/campagne.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouveau-campagne',
  templateUrl: './nouveau-campagne.component.html',
  styleUrls: ['./nouveau-campagne.component.css']
})
export class NouveauCampagneComponent implements OnInit {
   public curentcampagne:Campagne;
   public demographies;

  constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
   this.capservice.onGetdemographiedropdown()
        .subscribe(data=>{
           this.demographies=data;
          },err=>{
          console.log(err);
          })
  }
   onSaveCampagne(data:any){
      this.capservice.saveRessourceca(this.capservice.host+"/campagnes",data)
      .subscribe(resu=>{
      console.log(resu);
      this.router.navigateByUrl("/campagnes")
      this.curentcampagne=resu;
      },err=>{
      console.log(err);
      })
    }
     onGetdemogra(){

      }


}
