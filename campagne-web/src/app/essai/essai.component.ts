import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { ActivatedRoute } from '@angular/router';
import { Campagne } from '../model/campagne.model';

@Component({
  selector: 'app-essai',
  templateUrl: './essai.component.html',
  styleUrls: ['./essai.component.css']
})
export class EssaiComponent implements OnInit {
public enfants;
public campagnes;
public wilayas;
public moughataas;
public vaccinations;
public currentwilaya;
public currentvaccination;
public demographie;
public enquetes;
public mou;
public cams;
public vacs;
public cal;
public camp;
public calcul;
public va;
public campagne;
public araycampagnes;
public es;
  constructor(private capservice:CampagnevacService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
this.capservice.getcampagnes()
                               .subscribe(data=>{
                               this.campagnes=data;
                                    this.cal=0;
                                 this.campagnes._embedded.campagnes.forEach((c: Campagne)=>{

                                this.calcul=this.cal+c.id;

                                })
                                   //console.log(this.cal);
                                })

              this.capservice.getcampagnes()
                           .subscribe(data=>{
                           this.campagnes=data;



           // this.activatedRoute.paramMap.subscribe(params => {
                  this.campagnes._embedded.campagnes.forEach((c: Campagne) => {

                    if (c.id == this.activatedRoute.snapshot.params.id) {
                      this.camp = c;
                      //console.log(this.demo);
                      this.capservice.getchartdemo(this.camp)
                                       .subscribe(data=>{

                                       this.demographie=data;

                    this.capservice.getcharten(this.demographie)
                             .subscribe(data=>{
                             this.enquetes=data;
                            // console.log(this.enquetes);
          this.enquetes._embedded.enquetes.forEach(e=>{
             this.capservice.getchartm(e)
                     .subscribe(data=>{
                     this.mou=data;
                     //console.log(data);
                     this.capservice.getchartvac(this.mou)
                                          .subscribe(data=>{
                                          this.vaccinations=data;
                                          this.vaccinations._embedded.vaccinations.forEach(v=>{

                                          //console.log(v.campagne);

                                           this.capservice.getcampagne(v)
                                                      .subscribe(data=>{
                                                        this.campagnes=data;
                                                       //console.log(this.campagnes.id);
                                                       //console.log(this.camp.id);


                                        if(this.campagnes.id==this.camp.id){

                                            //this.capservice.getchartvac(this.camp)
                                            //.subscribe(data=>{
                                               this.va=v;
                                                         console.log(this.va);

                                                           // })
                                                            // console.log(this.camp.id);
                                                            }

                                                              // })
 })
  })










})




  })






                              })
                              })

                                         })

                                                                               }

                                                                           });

                                                                       })
                            /* this.capservice.getchartenquetes2(demographie.enquete)
                                           .subscribe(data1=>{
                                            console.log(data1);
                                            data.enquetes=data1;

                                           // console.log(data.enquetes);

                       data.enquetes._embedded.enquetes.forEach(enquete=>{
                                   this.pop=this.popvi;
                                    this.result=(this.cal/this.pop)*100;
                                   //console.log(this.pop);

                          // this.mname= h.moughataa;
                           //console.log(this.mname);


          })
      /*this.capservice.getwilaya()
      .subscribe(data=>{
      this.wilayas=data;
      },err=>{
      console.log(err);
      })
    }
onGetDemographie(w){
this.currentwilaya=w;
this.capservice.getmoughata(w)
      .subscribe(data=>{
      this.moughataas=data;
       this.moughataas._embedded.moughataas.forEach(moughataa=>{
       this.capservice.getchartmoughata(moughataa)
       .subscribe(data=>{
       moughataa.enquetes=data;
     },err=>{
      console.log(err);
      })
      })
      },err=>{
      console.log(err);
      })*/
      }


}


