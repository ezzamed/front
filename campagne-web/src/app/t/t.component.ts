 import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampagnevacService } from '../services/campagnevac.service';
import { Enquete } from '../model/enquete.model';
import { Demographie } from '../model/demographie.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent implements OnInit {
public enquetes;
public ig;
public id;
public demographies;
 demo:Demographie;

public cal;
public enquetesdemo;
public sub;
public test;
public x;

 public totalpages:number;
 public   Pages:Array<number>;

 public size:number=5;
 public currentPage:number=0;
 public currentKeyword: string="";
 //public test: string="";
 public wilayas;
 public moughataas;
 public  selectedemo;
 public enq;
 public demos;

 public mode:number=1;
 public de:number=9;

    constructor(private capservice:CampagnevacService,
        private activatedRoute: ActivatedRoute,private router:Router,private demogService:DemographieService) { }

    ngOnInit() {


    /* this.capservice.getdemograph2()
                       .subscribe(data=>{
                       this.demographies=data;
                            this.cal=0;
                         this.demographies._embedded.demographies.forEach((t: Demographie)=>{

                        this.cal=this.cal+t.id;

                        })
                           console.log(this.cal);
                        })*/

      this.capservice.getdemograph1()
                   .subscribe(data=>{
                   this.demographies=data;
                   //console.log(data);


   // this.activatedRoute.paramMap.subscribe(params => {
          this.demographies._embedded.demographies.forEach((d: Demographie) => {

            if (d.id == this.activatedRoute.snapshot.params.id) {
              this.demo = d;
             // console.log(this.demo);
                 this.capservice.getEnquetes2(this.currentPage,this.size,this.activatedRoute.snapshot.params.id)
                             .subscribe(data=>{
                              //console.log(data);


                        this.totalpages=data.totalPages;
                         this.Pages=new Array(this.totalpages);


                               this.enquetes=data;
                               //console.log(data);

                            /* this.enquetes.forEach((e: Enquete) => {
                                 console.log(e);

                                                                      if (e.demographie.id == this.demo.id) {
                                                                        //this.demo = d;
                                                                        //this.x=e;



                                                                       // console.log(this.x);





                                                                          }
                                                                          })*/



                               //console.log(this.enquetes);
                               //this.mode=2;
                               },err=>{
                               console.log(err);
                               })

             // console.log(this.demo);
               /*this.capservice.getEnquetes(this.demo)
                 .subscribe(data=>{
                // console.log(data)
                 this.enquetes=data;
                        })*/

            }

        });


    })

    /*
   this.activatedRoute.paramMap.subscribe(id => {
  //this.activatedRoute.params.subscribe( id =>{
             console.log(id);
             this.id=id;
            //console.log(params);
             //this.id = params.get('id');

           this.capservice.getProduct(this.id)
             .subscribe(dat => {
             console.log(dat)
             this.demo=dat;

             this.capservice.getEnquetes(this.demo)
                                  .subscribe(data=>{
                             console.log(data)
                                      this.enquetes=data;

          }

          ,err=>{
           console.log(err);
            })
            }
            ,err=>{
            console.log(err);

         })

})

  /*this.capservice.getdemograph().subscribe(
              data =>; {
                  this.demographies = data;
                  this.filteredDemographies = this.demographies;
              }
          );*/
//@Input() enquetes: Enquete[];


        //this.activatedRoute.params.subscribe( id => console.log(id) );
      // let de:string =this.activatedRoute.snapshot.params['d'];
      // console.log(de);
        //his.capservice.getEnquetes(params)

            //.subscribe(data=>{
           // this.enquetes=params;
              //  this.activatedRoute.params.subscribe( id =>{
         /* this.activatedRoute.params.subscribe( id =>{
           console.log(id);
           this.id=id;

               this.capservice
                 .getParticularHero(this.id)
                 .subscribe(
                   demo =>{this.demo = demo;



           this.capservice.getEnquetes(this.demo)
                     .subscribe(data=>{
                     console.log(data);
                         this.enquetes=data;
                        }
                        ,err=>{
                         console.log(err);
                         })
                         }
                          ,err=>{
                            console.log(err);
                               })
                                }
                              ,err=>{
                            console.log(err);
                             })*/



}
nouvenquete(){
console.log(this.demo.id);
 //this.router.navigateByUrl("/nouveau-enquete")
this.router.navigate(['/nouveau-enquete',this.demo.id]);

            }


 supprimerenquete(e){
            let conf=confirm("êtes vous sur de vouloir supprimer ces données démographiques");
            if(conf){
              this.demogService.deleteEnquete(e.id);
            }
}
Editenquete(e){
          //console.log(d);
        //let url=e._links.self.href;
        let url=e;
        console.log(e);
        //this.router.navigateByUrl("/edit-enquete/"+btoa(url));
        this.router.navigate(['edit-enquete/',e.id]);


         }

         details(e){
         this.router.navigate(['/detailsenquete',e.id]);
}
 onPageSE(i){
  this.currentPage=i;
  this.ngOnInit();
  //this.Chercherdemogs();
  }
  onChercher(form: any){
      this.currentPage=0;
      this.currentKeyword=form.keyword;
      this.Chercherdemogs();}
    Chercherdemogs(){
   this.capservice.getEnquetes2(this.currentPage,this.size,this.activatedRoute.snapshot.params.id)
                                .subscribe(data=>{
                                 //console.log(data);


                           this.totalpages=data.totalPages;
                            this.Pages=new Array(this.totalpages);
        this.enquetes=data;
        },err=>{
        console.log(err);
        });
        }


}
