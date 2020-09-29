import { Component, OnInit,Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demogs',
  templateUrl: './demogs.component.html',
  styleUrls: ['./demogs.component.css']
})
export class DemogsComponent implements OnInit {

 public demographies:any;
 public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public test: string="";
 public wilayas;
 public moughataas;
 public  selectedemo;
 public enquetes;
 public mode:number=1;
 public de:number=9;

  constructor(private capservice:CampagnevacService ,private router:Router) { }

  ngOnInit(): void {
   /*this.capservice.onGetwilayadropdown()
          .subscribe(data=>{
             this.wilayas=data;
             })*/


              this.capservice.getdemogs(this. currentpage,this.size)
               .subscribe(data=>{

                 this.totalPages=data["page"].totalPages;
                 this.pages=new Array<number>(this.totalPages);
                 this.demographies=data;
                 this.mode=2;
                 },err=>{
                 console.log(err);
                 })

}
getmou(w){
this.capservice.onGetmoughatadropdown()
          .subscribe(data=>{
             this.moughataas=data;
             }
             ,err=>{
              console.log(err);
              })

}
onSaveDonneedemogra(){
}


  onGetdemographie(){

  }
  onPagedemogs(i){
  this.currentpage=i;
  this.onGetdemographie();
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
       this.demographies=data;
      },err=>{
      console.log(err);
      });
      }
      Deletedomogs(d){


            let conf=confirm("etes vous sur");
            if(conf)
            this.capservice.deleteRessource(d._links.self.href)
            .subscribe(data=>{
            this.Chercherdemogs();
            },err=>{
            console.log(err);
            })

            }
            /*supprimer(d){
            his.capservice.deletemethod(d.id)
                        .subscribe(data=>{
                        this.Chercherdemogs();
                        },err=>{
                        console.log(err);
                        })
            }*/
        Editdomogs(d){
        let url=d._links.self.href;
        this.router.navigateByUrl("/edit-demog/"+btoa(url));

         }
         /*onGetdonnee(d){
         console.log(d);
         this.de=d;
         this.capservice.getEnquetes(this.de)
                   .subscribe(data=>{
                      this.enquetes=data;

                      }
                      ,err=>{
                       console.log(err);
                       })
         this.test="donnee demographies";
         console.log(d);
         this.selectedemo=d;
         //this.iddemo.push(d);
         //console.log(iddemo);
         }
         onSavedonnee(dataForm){
         let demo;
         demo=this.selectedemo.id;
         dataForm.demo=demo;

//console.log(dataForm);
      this.capservice.saveRessourcecen(this.capservice.host+"/enquetes",dataForm)
                             .subscribe(data=>{

                             },err=>{
                             console.log(err);
                             })



         //demo.push(this.iddemo.id);
          // formData.de=de;
          // console.log(formData);
           /* this.capservice.saveRessourcecen(this.capservice.host+"/enquetes",formData)
                       .subscribe(data=>{
                       },err=>{
                       console.log(err);
                       })


         console.log(formData);

}*/
nouvdemo(){
this.router.navigateByUrl("/nouveau-demogs")}
onselect(d){
this.router.navigate(['/t',d.id]);
}
}
