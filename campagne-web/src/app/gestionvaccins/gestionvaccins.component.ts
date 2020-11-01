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
 public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public test: string="";
 public mode:number=1;
 public de:number=9;

    constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.getvaccinspage(this.currentpage,this.size)
                 .subscribe(data=>{

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


}
