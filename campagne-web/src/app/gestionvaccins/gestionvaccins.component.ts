import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { Wilaya } from '../model/wilaya.model';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-gestionvaccins',
  templateUrl: './gestionvaccins.component.html',
  styleUrls: ['./gestionvaccins.component.css']
})
export class GestionvaccinsComponent implements OnInit {
public vaccins;
public curent;
 public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public test: string="";
 public mode:number=1;
 public de:number=9;

    constructor(private capservice:CampagnevacService,private router:Router,private demogService: DemographieService) { }


  ngOnInit(): void {
  this.capservice.getvaccinspage(this.currentpage,this.size)
                 .subscribe(data=>{
                 console.log(data);

                   this.totalPages=data["page"].totalPages;
                   this.pages=new Array<number>(this.totalPages);
                   this.vaccins=data;
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

    Deletevaccin(v){
                let conf=confirm("êtes-vous sûr de vouloir supprimer ce wilaya?");
                if(conf){
                  this.demogService.deleteVaccin(v.id);
                    this.router.navigateByUrl("/gestionvaccins");

                }

                }
                 Editvaccin(v){

                                                   //console.log(d);
                  //let url=a._links.self.href;
                  //this.router.navigateByUrl("/edit-user/"+btoa(url));
                 // console.log(w.id);

                  this.router.navigate(['edit-wilaya/',v.id]);

                           }



}
