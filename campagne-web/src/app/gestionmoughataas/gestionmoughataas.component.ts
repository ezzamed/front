import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionmoughataas',
  templateUrl: './gestionmoughataas.component.html',
  styleUrls: ['./gestionmoughataas.component.css']
})
export class GestionmoughataasComponent implements OnInit {
public moughataas;
public curent;

 constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
   this.capservice.onGetmoughataas()
                    .subscribe(data=>{
                       this.moughataas=data;
                       console.log(this.moughataas);
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
