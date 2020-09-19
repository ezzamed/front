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
    this.capservice.saveRessource(this.capservice.host+"/demographies",data)
    .subscribe(res=>{
    //this.router.navigateByUrl("/demogs")
    this.curentproduct=res;
    this.router.navigateByUrl("/demogs");
    },err=>{
    console.log(err);
    })
  }
  onNewDemog(){
  this.mode=1;
  }

}
