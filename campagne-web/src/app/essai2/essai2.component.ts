import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Campagne } from '../model/campagne.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-essai2',
  templateUrl: './essai2.component.html',
  styleUrls: ['./essai2.component.css']
})
export class Essai2Component implements OnInit {

public vaccinations;

 public moughatan;
 public mou;
 public moughata;
  public moughataas;
  public demographies;
 public enquetes;
  public campagnes;
  public cal=0;
   public pop;
  public result=0;
  public mname;
  public calcul;
  public camp;

 constructor(private capservice:CampagnevacService, private activatedRoute: ActivatedRoute) { }
ngOnInit(): void {
 /*this.capservice.getcampagnes()
                       .subscribe(data=>{
                       this.campagnes=data;
                            this.cal=0;
                         this.campagnes._embedded.campagnes.forEach((t: Campagne)=>{

                        this.calcul=this.cal+t.id;

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
              console.log(this.camp);
              this.capservice.getchartvaccinations2(this.camp)
                               .subscribe(data=>{

                               this.vaccinations=data;
                                console.log(data)
                this.vaccinations=data;
                this.vaccinations._embedded.vaccinations.forEach(h=>{

                 this.cal=this.cal+h.nombre;

                    this.capservice.getchartmoughataa(h)
                     .subscribe(data=>{
                     this.moughata=data;
                      this.mname=h.moughataa.moughataaname;
                     // console.log(this.mname);


                     this.capservice.getchartenquetes2(moughata)
                                   .subscribe(data1=>{
                                    this.enquetes=data1;

               data.enquetes._embedded.enquetes.forEach(enquete=>{
                           this.pop=enquete.popvisee;
                          // console.log(this.pop);

                  // this.mname= h.moughataa;
                   //console.log(this.mname);

 })
  })

  })

  })

  })


                              })

                                        }

                                    });

                                })

      // this.cal=this.cal+h.nombre;
      // this.moughatan=h.moughataa;






        /*this.capservice.getchartenquetes(this.moughata)
           .subscribe(data=>{
          console.log(data);
           console.log(data);*/


      // console.log(this.cal);
      // console.log(this.moughatan)

  /*ngOnInit(): void {
  this.capservice.getpromou()
   .subscribe(data=>{
   this.moughataas=data;
   this.moughataas._embedded.moughataas.forEach(moughata=>{
    this.capservice.getchartenquetes(moughata)
    .subscribe(data=>{
    moughata.enquetes=data;
    console.log(data);

    this.capservice.getchartvaccinations(moughata)
     .subscribe(data=>{
     moughata.vaccinations=data;
 console.log(data);
    },err=>{
    console.log(err);
    })

    })
    },err=>{
    console.log(err);
    })
    })
*/
   }
}
