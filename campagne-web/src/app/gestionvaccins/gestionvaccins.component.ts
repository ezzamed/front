import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionvaccins',
  templateUrl: './gestionvaccins.component.html',
  styleUrls: ['./gestionvaccins.component.css']
})
export class GestionvaccinsComponent implements OnInit {
public vaccins;
public curent;
    constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.getVaccins()
                    .subscribe(data=>{
                       this.vaccins=data;
                       console.log(this.vaccins);                },err=>{
                      console.log(err);
                      })
    }
    onSaveVaccin(data:any){
          this.capservice.postvaccins(this.capservice.host+"/vaccins",data)
          .subscribe(res=>{
          //this.router.navigateByUrl("/demogs")
          this.curent=res;
          //this.router.navigateByUrl("/users");


          },err=>{
          console.log(err);
          })
    }


}
