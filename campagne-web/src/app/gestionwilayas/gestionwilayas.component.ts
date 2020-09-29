import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionwilayas',
  templateUrl: './gestionwilayas.component.html',
  styleUrls: ['./gestionwilayas.component.css']
})
export class GestionwilayasComponent implements OnInit {
public wilayas;
public curent;
  constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.onGetwilayas()
                      .subscribe(data=>{
                         this.wilayas=data;
                         console.log(this.wilayas);                },err=>{
                        console.log(err);
                        })
      }
      onSaveWilaya(data:any){
            this.capservice.postwilaya(this.capservice.host+"/wilayas",data)
            .subscribe(res=>{
            //this.router.navigateByUrl("/demogs")
            this.curent=res;
            //this.router.navigateByUrl("/users");


            },err=>{
            console.log(err);
            })
      }









}
