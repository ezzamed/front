import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Campagne } from '../model/campagne.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
 public moughataas;
 public demographies;
 //public cal=0;
  public pop;
 public result=0;
 public mname;
  public calcul;
   public demo;
   public campagnes;
   public vaccinations;
   public popvi;
   public enquetes;
   public camp;
   public mou;
   public va;

   public demographie;
 moughataasData = {
    labels: [],
    datasets: []
  };
  constructor(private capservice:CampagnevacService, private activatedRoute: ActivatedRoute) { }

 ngOnInit():void{


  const datasets1 = {
            label: "",
            data: [],
            backgroundColor: 'rgba(255, 200, 85, 0.2)',
            borderColor: 'rgb(255, 99, 132)'
          };
                 //je recupere la campagne
               this.capservice.getcampagnes()
                  .subscribe(data=>{
                  this.campagnes=data;
               this.campagnes._embedded.campagnes.forEach((c: Campagne) => {

                  if (c.id == this.activatedRoute.snapshot.params.id) {
                      this.camp = c;
                       //console.log(this.camp);
                 //je recupere la demographie de cette campagne
                this.capservice.getchartdemo(this.camp)
                    .subscribe(data=>{
                    this.demographie=data;
                    console.log(this.demographie);
                 //je recupere les enquetes de cette demographie
                this.capservice.getcharten(this.demographie)
                .subscribe(data=>{
                    this.enquetes=data;

                    //console.log(this.enquetes);
                  //je recupere pour chaq enquete la moughataa
                this.enquetes._embedded.enquetes.forEach(e=>{
                this.pop=e.popvisee;
                    this.capservice.getchartm(e)
                    .subscribe(data=>{
                    this.mou=data;

                    this.mname=this.mou.moughataaname;
                    //console.log(this.mou.moughataaname);
                    this.moughataasData.labels.push(this.mname);
                    //console.log(this.mname);
                    ////je recupere les vaccinations de cette moughataa
                this.capservice.getchartvac(this.mou)
                    .subscribe(data=>{
                    this.vaccinations=data;
                    this.vaccinations._embedded.vaccinations.forEach(v=>{




                                    this.capservice.getcampagne(v)
                                        .subscribe(data=>{
                                    this.campagnes=data;

                                     if(this.campagnes.id==this.camp.id){
                                         this.va=v;

                                        //console.log(this.va);

                                        }
 //console.log(this.pourcentageReel(this.va,this.pop));
                                                                                               datasets1.data.push(this.result);
                                                                                               console.log(this.result);
                                                                                                   this.moughataasData.datasets.push(datasets1);



                                          })
                                        //let test=this.pourcentageReel(this.va,this.pop);


                                                    })












                                                    })


                                                      })



                                                              })
                                                              })









                                                                                })

                                                                                          }



                                                                                      });


                                                                                  })



 }
                    pourcentageReel(vaccinations,popvisee){
                    let pourcentage=0;
                    //console.log(vaccinations);

                 //if(va.moughataa==this.mou.id){
                    //this.va=v;

                    pourcentage+=vaccinations.nombre;
                    //this.result=(pourcentage/popvisee)*100



                    //}
                    return(pourcentage);
                     //console.log(this.result);



}





                                                         //this.cal=0;













         //console.log(this.result);




//this.result=(pourcentage/this.pop)*100;





}


