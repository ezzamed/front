import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.css']
})
export class CampagnesComponent implements OnInit {
public campagnes;
  constructor(private capservice:CampagnevacService ,private router:Router) { }

  ngOnInit(): void {
  this.capservice.getcampagnes()
                   .subscribe(data=>{

                 //console.log(data)
                     this.campagnes=data;

                     },err=>{
                     console.log(err);
                     })
                      /*onPagedemogs(i){
                       this.currentpage=i;
                      // this.onGetdemographie();
                       //this.Chercherdemogs();
                       }
                       onGetdemographie(){

                         }
                         onPagedemogs(i){
                         this.currentpage=i;
                         this.onGetdemographie();
                         //this.Chercherdemogs();
                         }*/



}
     nouveauser(){
    this.router.navigateByUrl("/nouveau-campagne")
    }



onselect(c){
this.router.navigate(['/dashboard',c.id]);
}
detailselect(c){
this.router.navigate(['/exportpdf',c.id]);
}


}
