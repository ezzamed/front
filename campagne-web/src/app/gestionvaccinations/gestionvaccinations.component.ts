import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { ActivatedRoute } from '@angular/router';
import { Enquete } from '../model/enquete.model';
import { Demographie } from '../model/demographie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-gestionvaccinations',
  templateUrl: './gestionvaccinations.component.html',
  styleUrls: ['./gestionvaccinations.component.css']
})
export class GestionvaccinationsComponent implements OnInit {
public vaccinations:any;







 public sub;
 public test;
 public x;

  public totalpages:number;
  public   Pages:Array<number>;

  public size:number=5;
  public currentPage:number=0;
  public currentKeyword: string="";
  //public test: string="";

  public  selectedemo;


  public mode:number=1;
  public de:number=9;

    constructor(private capservice:CampagnevacService,
                        private activatedRoute: ActivatedRoute,private router:Router,private demogService:DemographieService) { }

  ngOnInit(): void {
   this.capservice.getVaccinations(this.currentPage,this.size)
                                .subscribe(data=>{
                                 //console.log(data);


                           this.totalpages=data.totalPages;
                            this.Pages=new Array(this.totalpages);


                                  this.vaccinations=data;
                   //this.mode=2;
                   },err=>{
                   console.log(err);
                   })





}
onPagedemogs(i){
      this.currentPage=i;
      this.ngOnInit();
      //this.Chercherdemogs();
      }
      onPageSE(i){
        this.currentPage=i;
        this.ngOnInit();
        //this.Chercherdemogs();
        }

}
