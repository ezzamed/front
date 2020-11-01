import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.css']
})
export class CampagnesComponent implements OnInit {
public campagnes;
 public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public test: string="";
  constructor(private capservice:CampagnevacService ,private router:Router,private demogService:DemographieService) { }

  ngOnInit(): void {
   this.capservice.getcamps(this.currentpage,this.size)
                 .subscribe(data=>{

                   this.totalPages=data["page"].totalPages;
                   this.pages=new Array<number>(this.totalPages);
                   this.campagnes=data;
                   //this.mode=2;
                   },err=>{
                   console.log(err);
                   })
  /*this.capservice.getcampagnes()
                   .subscribe(data=>{

                 //console.log(data)
                     this.campagnes=data;

                     },err=>{
                     console.log(err);
                     })*/
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
onPagedemogs(i){
  this.currentpage=i;
  this.ngOnInit();
  //this.Chercherdemogs();
  }
  onChercher(form: any){
      this.currentpage=0;
      this.currentKeyword=form.keyword;
      this.Chercherdemogs();}
    Chercherdemogs(){
    this.capservice.getdemogsBykeyword(this.currentKeyword,this. currentpage,this.size)
      .subscribe(data=>{

        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
         this.campagnes=data;
        },err=>{
        console.log(err);
        });
        }
     nouveauser(){
    this.router.navigateByUrl("/nouveau-campagne")
    }

 Deletecampagne(c){
            let conf=confirm("etes vous sur");
            if(conf){
              this.demogService.deleteCampagne(c.id);
            }
            }
  Editcampagne(c){
           //console.log(d);
         let url=c._links.self.href;
         this.router.navigateByUrl("/edit-campagne/"+btoa(url));

          }

onselect(c){
this.router.navigate(['/dashboard',c.id]);
}
onselectstatistiques(c){
this.router.navigate(['/statistique',c.id]);
}
detailselect(c){
this.router.navigate(['/exportpdf',c.id]);
}


}
