import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { Campagne } from '../model/campagne.model';
import { ActivatedRoute } from '@angular/router';
import { StatistiqueSevice } from '../services/StatistiqueSevice';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-exportpdf',
  templateUrl: './exportpdf.component.html',
  styleUrls: ['./exportpdf.component.css']
})
export class ExportpdfComponent {
  public wilayas;
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

  constructor(private capservice: CampagnevacService, private router: Router, private activatedRoute: ActivatedRoute, private statistiqueService: StatistiqueSevice) { }

  title = 'angular-app';
  fileName = 'ExcelSheet.xlsx';

  ngOnInit(): void {
    this.statistiqueService.getCampgane(this.activatedRoute.snapshot.params.id)
      .subscribe((data) => {
        this.camp = data;
        this.statistiqueService.getCampganeVaccinations(this.camp.id)
          .subscribe((result) => {
            this.vaccinations = result;
            let vaccinations = result;
            //console.log(this.vaccinations);

            this.statistiqueService.getCampagneMoughataas(this.camp.id)
            .subscribe((result)=>{
              this.moughataas = result;
              let moughataas = result;

            })
            /*
            this.statistiqueService.getCampagneWilayas(this.camp.id)
              .subscribe((result) => {
                this.wilayas = result;
                this.wilayas.map((wilaya) => {
                  //console.log(wilaya);
                  this.statistiqueService.getWilayaMoughataas(wilaya.id)
                    .subscribe((mogs) => {
                      let mgts: any;// = []:any;
                      mgts = mogs;

                    })

                });
              })
              */
          })

      })


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

  exportexcel(): void {

    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }






}
