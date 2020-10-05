import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Campagne } from '../model/campagne.model';
import { ActivatedRoute } from '@angular/router';
import { StatistiqueSevice } from '../services/StatistiqueSevice';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public moughataas;
  public demographies;
  //public cal=0;
  public pop;
  public result = 0;
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
  constructor(private capservice: CampagnevacService, private activatedRoute: ActivatedRoute, private statistiqueService:StatistiqueSevice) { }

  /*
  ngOnInit(): void {
    const datasets1 = {
      label: "",
      data: [],
      backgroundColor: 'rgba(255, 200, 85, 0.2)',
      borderColor: 'rgb(255, 99, 132)'
    };
    //je recupere la campagne
    this.capservice.getcampagnes()
      .subscribe(data => {
        this.campagnes = data;
        this.campagnes._embedded.campagnes.forEach((c: Campagne) => {
          if (c.id == this.activatedRoute.snapshot.params.id) {
            this.camp = c;
            //console.log(this.camp);
            //je recupere la demographie de cette campagne
            this.capservice.getchartdemo(this.camp)
              .subscribe(data => {
                this.demographie = data;
                //console.log(this.demographie);
                //je recupere les enquetes de cette demographie
                this.capservice.getcharten(this.demographie)
                  .subscribe(data => {
                    this.enquetes = data;
                    //console.log(this.enquetes);
                    //je recupere pour chaq enquete la moughataa
                    this.enquetes._embedded.enquetes.forEach(e => {
                      this.pop = e.popvisee;
                      this.capservice.getchartm(e)
                        .subscribe(data => {
                          this.mou = data;
                          this.mname = this.mou.moughataaname;
                          //console.log(this.mou.moughataaname);
                          this.moughataasData.labels.push(this.mname);
                          //console.log(this.mname);
                          ////je recupere les vaccinations de cette moughataa
                          this.capservice.getchartvac(this.mou)
                            .subscribe(data => {
                              this.vaccinations = data;
                              this.vaccinations._embedded.vaccinations.forEach(v => {
                                this.capservice.getcampagne(v)
                                  .subscribe(data => {
                                    this.campagnes = data;
                                    if (this.campagnes.id == this.camp.id) {
                                      this.va = v;
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
  */

  //On a:
  /*
  Campagne
  */
 //On cherche:
 /*
  //Les vaccinations de la campagne
  //Les Moughataas de la campagne
  //Population visee pour une enquete
  enquete = moughataa + campagne
 */

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {

    const datasets1 = {
      label: "",
      data: [],
      backgroundColor: 'rgba(255, 200, 85, 0.2)',
      borderColor: 'rgb(255, 99, 132)'
    };

    this.moughataasData.labels.push("");
    datasets1.data.push(0);
    this.moughataasData.datasets.push(datasets1);

    this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
    .subscribe((data)=>{
      this.camp = data;
      this.statistiqueService.getCampganeVaccinations(this.camp.id)
      .subscribe((result)=>{
        this.vaccinations = result;
        this.statistiqueService.getCampagneMoughataas(this.camp.id)
        .subscribe((result)=>{
          this.moughataas = result;
          this.moughataas.map((moughataa)=>{
            this.statistiqueService.getEnquete(this.camp.id, moughataa.id)
            .subscribe((enq)=>{
              this.moughataasData.labels.push(moughataa.moughataaname);
              datasets1.data.push(this.statistiquesParMoughataa(this.vaccinations, moughataa, enq));
              this.moughataasData.datasets.push(datasets1);
            })
          })
        })
      })
    });

    /*
    //je recupere la campagne
    this.capservice.getcampagnes()
      .subscribe(data => {
        this.campagnes = data;
        this.campagnes._embedded.campagnes.forEach((c: Campagne) => {
          if (c.id == this.activatedRoute.snapshot.params.id) {
            this.camp = c;
            //console.log(this.camp);
            //je recupere la demographie de cette campagne
            this.capservice.getchartdemo(this.camp)
              .subscribe(data => {
                this.demographie = data;
                //console.log(this.demographie);
                //je recupere les enquetes de cette demographie
                this.capservice.getcharten(this.demographie)
                  .subscribe(data => {
                    this.enquetes = data;
                    //console.log(this.enquetes);
                    //je recupere pour chaq enquete la moughataa
                    this.enquetes._embedded.enquetes.forEach(e => {
                      this.pop = e.popvisee;
                      this.capservice.getchartm(e)
                        .subscribe(data => {
                          this.mou = data;
                          this.mname = this.mou.moughataaname;
                          //console.log(this.mou.moughataaname);
                          this.moughataasData.labels.push(this.mname);
                          //console.log(this.mname);
                          ////je recupere les vaccinations de cette moughataa
                          this.capservice.getchartvac(this.mou)
                            .subscribe(data => {
                              this.vaccinations = data;
                              this.vaccinations._embedded.vaccinations.forEach(v => {
                                this.capservice.getcampagne(v)
                                  .subscribe(data => {
                                    this.campagnes = data;
                                    if (this.campagnes.id == this.camp.id) {
                                      this.va = v;
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
      */
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //vaccinations est la liste des vaccinations de la campgane selectionne
  //moughataa est la moughtaa dont on veut calculer le pourcentage de vaccinations
  //enquetes liste des enquetes de la campagne selectionne
  statistiquesParMoughataa(vaccinations, moughataa, enquete){
    //res est la somme de nombre d'enfants des vaccinations d'une campagne et une moughataa
    let res = 0;
    //on recupere le nombe d'enfant de chaque vaccination de la moughataa et la campagne en questions
    vaccinations.map((vac)=>{
        if(vac.moughataa.id===moughataa.id){
          res = res+vac.nombre_enfant;
      }
    });
    //on retourne le pourcentage des vaccinations de la campagne/moughataa;
    return ((res/enquete[0].popvisee)*100);
  }

}


