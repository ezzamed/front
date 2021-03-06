import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Demographie } from '../model/demographie.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nouveau-demogs',
  templateUrl: './nouveau-demogs.component.html',
  styleUrls: ['./nouveau-demogs.component.css']
})
export class NouveauDemogsComponent implements OnInit {
   public curentproduct:Demographie;
   public mode:number=1;

  constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  }
  onSaveDemog(data:any){


    //this.capservice.(this.capservice.host+"/demographies",data)
    this.capservice.savedemographie(data)

    .subscribe(res=>{

    //this.router.navigateByUrl("/demogs")
    //this.curentproduct=res;

    //console.log(this.curentproduct);
    this.router.navigateByUrl("/demogs");


    },err=>{
    console.log(err);
    })
     let conf=confirm("Les donnees ont été correctement inserés ");
  }
  onNewDemog(){
  this.mode=1;
  }

}
