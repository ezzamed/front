import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Campagne } from '../model/campagne.model';
import { ActivatedRoute } from '@angular/router';
import { StatistiqueSevice } from '../services/StatistiqueSevice';
@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {




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
  public wilayas;
  public vaccins;
  moughataasData = {
    labels: [],
    datasets: []
  };
  WilayasData = {
    labels: [],
    datasets: []
  };
  vaccinsData = {
    labels: [],
    datasets: []
  };
  tracheAgeData011 = {
    labels: [],
    datasets: []
  };
  tracheAgeData1259 = {
    labels: [],
    datasets: []
  };

  constructor(private capservice: CampagnevacService, private activatedRoute: ActivatedRoute, private statistiqueService: StatistiqueSevice) { }

  ngOnInit(): void {

    const datasets1 = {
      label: "",
      data: [],
      backgroundColor: '#028f90',
      borderColor: 'rgb(255, 99, 132)'
    };
    const datasetsWilaya = {
      label: "",
      data: [],
      backgroundColor: '#028f90',

    };
    const datasetsTrancheAge011 = {
      label: "",
      data: [],
      backgroundColor: '#028f90',
      borderColor: 'rgb(255, 99, 132)'
    };
    const datasetsTrancheAge1259 = {
      label: "",
      data: [],
      backgroundColor: '#028f90',
      borderColor: 'rgb(255, 99, 132)'
    };
    const datasetsVaccin = {
      label: "",
      data: [],
      backgroundColor: '#028f90',
      borderColor: 'rgb(255, 99, 132)'
    };


    /*this.moughataasData.labels.push("");
    datasets1.data.push(0);
    this.moughataasData.datasets.push(datasets1);*/

    //par vaccins
    this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
      .subscribe((data) => {
        this.camp = data;
        this.statistiqueService.getCampganeVaccinations(this.camp.id)
        .subscribe((result)=>{
          let vaccinations = result;
          this.statistiqueService.getCampganeVaccins(this.camp.id)
          .subscribe((result) => {
            this.vaccins = result;
            this.vaccins.map((vaccin) => {
              if(this.statistiquesParVaccins(vaccinations, vaccin)){
                this.vaccinsData.labels.push(vaccin.nom_vaccin);
                datasetsVaccin.data.push(this.statistiquesParVaccins(vaccinations, vaccin));
                //console.log(this.statistiquesParVaccins(this.vaccinations,vaccin));
                this.vaccinsData.datasets.push(datasetsVaccin);
              }
              /*
              this.statistiqueService.getVaccinVaccinations(vaccin.id)
                .subscribe((data) => {
                  this.vaccinations = data;
                  this.vaccinsData.labels.push(vaccin.nom_vaccin);
                  datasetsVaccin.data.push(this.statistiquesParVaccins(this.vaccinations, vaccin));
                  //console.log(this.statistiquesParVaccins(this.vaccinations,vaccin));
                  this.vaccinsData.datasets.push(datasets1);
                });
                */

            })
          })
        })
      });



    //par moughataa
    this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
      .subscribe((data) => {
        this.camp = data;
        this.statistiqueService.getCampganeVaccinations(this.camp.id)
          .subscribe((result) => {
            this.vaccinations = result;
            let vaccinations = result;
            this.statistiqueService.getCampagneMoughataas(this.camp.id)
              .subscribe((result) => {
                this.moughataas = result;
                //console.log(this.moughataas);
                this.moughataas.map((moughataa) => {
                  this.moughataasData.labels.push(moughataa.moughataaname);
                  datasets1.data.push(this.statistiquesParMoughataa(vaccinations, moughataa));
                  this.moughataasData.datasets.push(datasets1);
                })
              })
          })
      });
    //par Wilaya
    this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
      .subscribe((data) => {
        this.camp = data;
        this.statistiqueService.getCampganeVaccinations(this.camp.id)
          .subscribe((result) => {
            this.vaccinations = result;
            let vaccinations = result;
            this.statistiqueService.getCampagneWilayas(this.camp.id)
              .subscribe((result) => {
                this.wilayas = result;
                this.wilayas.map((wilaya) => {
                  //console.log(wilaya);
                  this.statistiqueService.getWilayaMoughataas(wilaya.id)
                    .subscribe((mogs) => {
                      let mgts: any;// = []:any;
                      mgts = mogs;
                      //var enquete = null;
                      this.statistiqueService.getCampagneEnquetes(this.camp.id).subscribe((enqs) => {
                        this.WilayasData.labels.push(wilaya.name);
                        datasetsWilaya.data.push(this.statistiquesParWilaya(vaccinations, mgts));
                        this.WilayasData.datasets.push(datasetsWilaya)
                      })
                      //mgts.map((moughataa) => {
                      /*
                      this.statistiqueService.getEnquete(this.camp.id, moughataa.id)
                        .subscribe((enq) => {
                          //console.log(enq);
                          let en: any;
                          en = enq;
                          if (en.length < 1) {
                            console.log("undefined enquete");
                          } else {
                            enquete = enq;
                            //statWilayas.push(this.statistiquesParMoughataa(this.vaccinations, moughataa, enq));
                          }
                        },
                        (e) => {console.log(e)},
                          () => {
                            datasetsWilaya.data.push(this.statistiquesParWilaya(this.vaccinations,this.wilayas,  mgts, enquete));
                            this.WilayasData.datasets.push(datasetsWilaya)
                          });
                    }*/
                      //);
                    });
                })
              })
          })
      })

      //par tranche age
      this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
      .subscribe((data) => {
        this.camp = data;
        this.statistiqueService.getCampganeVaccinations(this.camp.id)
          .subscribe((result) => {
            this.vaccinations = result;
            let vaccinations = result;

            this.statistiqueService.getCampagneMoughataas(this.camp.id)
              .subscribe((result) => {
                this.moughataas = result;
                this.moughataas.map((moughataa) => {
                  if(this.statistiquesParTrancheAge011(vaccinations, moughataa)){
                    this.tracheAgeData011.labels.push(moughataa.moughataaname);
                    datasetsTrancheAge011.data.push(this.statistiquesParTrancheAge011(vaccinations, moughataa));
                    this.tracheAgeData011.datasets.push(datasetsTrancheAge011);
                  }
                  if(this.statistiquesParTrancheAge1259(vaccinations, moughataa)){
                    this.tracheAgeData1259.labels.push(moughataa.moughataaname);
                    datasetsTrancheAge1259.data.push(this.statistiquesParTrancheAge1259(vaccinations, moughataa));
                    this.tracheAgeData1259.datasets.push(datasetsTrancheAge1259);
                  }
                })
              })
          })
      });


  }

  statistiquesParTrancheAge011(vaccinations, moughataa){
    let res = 0;
    vaccinations.map((vac) => {
      if(vac.moughataa.id === moughataa.id && vac.tranche_age == "0-11"){
        res+=vac.nombre_enfant;
      }
    })
    return res;
  }

  statistiquesParTrancheAge1259(vaccinations, moughataa){
    let res = 0;
    vaccinations.map((vac) => {
      if(vac.moughataa.id === moughataa.id && vac.tranche_age == "12-59"){
        res+=vac.nombre_enfant;
      }
    })
    return res;
  }

  statistiquesParMoughataa(vaccinations, moughataa) {
    let res = 0;
    vaccinations.map((vac) => {
      if (vac.moughataa.id === moughataa.id) {
        res = res + vac.nombre_enfant;
      }
    });
    //on retourne le pourcentage des vaccinations de la campagne/moughataa;
    //console.log(res);
    return (res);

  }


  //vaccinations est la liste des vaccinations de la campgane selectionne
  //moughataa est la moughtaa dont on veut calculer le pourcentage de vaccinations
  //enquetes liste des enquetes de la campagne selectionne
  statistiquesParVaccins(vaccinations, vaccin) {
    //res est la somme de nombre d'enfants des vaccinations d'une campagne et une moughataa
    let res = 0;
    //on recupere le nombe d'enfant de chaque vaccination de la moughataa et la campagne en questions

    vaccinations.map((vac) => {
      if(vac.vaccin.id === vaccin.id)
        res = res + vac.nombre_enfant;
    });
    //on retourne le pourcentage des vaccinations de la campagne/moughataa;
    return res;
  }

  statistiquesParWilaya(vaccinations, moughataas) {
    let result = 0;
    let counter = 0;
    let nbr_enfants = 0;
    let popsVisees = 0;
    // enquetes.map((enq)=>{
    let i = 0;
    for (i = 0; i < moughataas.length; i++) {
      //if(enq.moughataa.id==moughataas[i].id){
      //conteur pour verifier si il ya eu de resultat ou non pour nous permettre d'eviter l'erreur de la division par 0;
      //counter++;
      vaccinations.map((vac) => {
        if (vac.moughataa.id === moughataas[i].id) {
          nbr_enfants += vac.nombre_enfant;
          //popsVisees+=enq.popvisee;
        }
      });
      //break;
    }
    //}
    //})
    //if(counter==0)
    //return 0;
    //else{
    //result = nbr_enfants/popsVisees;
    return nbr_enfants;
    //}
  }

}


