import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nouveau-moughataa',
  templateUrl: './nouveau-moughataa.component.html',
  styleUrls: ['./nouveau-moughataa.component.css']
})
export class NouveauMoughataaComponent implements OnInit {
public wilayas;
public curent;
   constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.onGetwilayadropdown()
          .subscribe(data=>{
             this.wilayas=data;
            },err=>{
            console.log(err);
            })
  }
  onSaveMoughataa(data:any){
            this.capservice.postmoughata(this.capservice.host+"/moughataas",data)
            .subscribe(res=>{
            //this.router.navigateByUrl("/demogs")
            this.curent=res;
            //this.router.navigateByUrl("/users");


            },err=>{
            console.log(err);
            })

  }

}
