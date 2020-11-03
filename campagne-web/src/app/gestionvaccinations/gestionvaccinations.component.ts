import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionvaccinations',
  templateUrl: './gestionvaccinations.component.html',
  styleUrls: ['./gestionvaccinations.component.css']
})
export class GestionvaccinationsComponent implements OnInit {
public vaccinations:any;
public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public test: string="";

    constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
   this.capservice.getvaccinationspage(this.currentpage,this.size)
                 .subscribe(data=>{

                   this.totalPages=data["page"].totalPages;
                   this.pages=new Array<number>(this.totalPages);
                   this.vaccinations=data;
                   //this.mode=2;
                   },err=>{
                   console.log(err);
                   })





}
onPagedemogs(i){
      this.currentpage=i;
      this.ngOnInit();
      //this.Chercherdemogs();
      }
}
