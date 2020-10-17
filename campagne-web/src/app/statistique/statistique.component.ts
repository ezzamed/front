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

    constructor(private capservice: CampagnevacService, private activatedRoute: ActivatedRoute, private statistiqueService: StatistiqueSevice) { }

    ngOnInit(): void {

      const datasets1 = {
        label: "",
        data: [],
        backgroundColor: 'rgba(255, 200, 85, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
      };
      const datasetsWilaya = {
        label: "",
        data: [],
        backgroundColor: 'rgba(255, 200, 85, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
      };
      const datasetsTrancheAge = {
        label: "",
        data: [],
        backgroundColor: 'rgba(255, 200, 85, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
      };

      this.moughataasData.labels.push("");
      datasets1.data.push(0);
      this.moughataasData.datasets.push(datasets1);

      this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
        .subscribe((data) => {
          this.camp = data;
          this.statistiqueService.getCampganeVaccins(this.camp.id)
            .subscribe((result) => {
              this.vaccins = result;

                   this.vaccins.map((vaccin) => {
                    this.statistiqueService.getVaccinVaccinations(vaccin.id)
                      .subscribe((data) => {
                      this.vaccinations=data;
                        this.moughataasData.labels.push(vaccin.nom_vaccin);
                        datasets1.data.push(this.statistiquesParMoughataa(this.vaccinations,vaccin));
                        this.moughataasData.datasets.push(datasets1);
                      })

                })
            })
        });


}
    //vaccinations est la liste des vaccinations de la campgane selectionne
    //moughataa est la moughtaa dont on veut calculer le pourcentage de vaccinations
    //enquetes liste des enquetes de la campagne selectionne
    statistiquesParMoughataa(vaccinations,vaccin) {
      //res est la somme de nombre d'enfants des vaccinations d'une campagne et une moughataa
      let res = 0;
      //on recupere le nombe d'enfant de chaque vaccination de la moughataa et la campagne en questions

           vaccinations.map((vac) => {
          res = res + vac.nombre_enfant;

      });
      //on retourne le pourcentage des vaccinations de la campagne/moughataa;
      return res;
    }



  }


