import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { Campagne } from '../model/campagne.model';
import { ActivatedRoute } from '@angular/router';

import * as XLSX from 'xlsx';
@Component({
  selector: 'app-exportpdf',
  templateUrl: './exportpdf.component.html',
  styleUrls: ['./exportpdf.component.css']
})
export class ExportpdfComponent {

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

 constructor(private capservice:CampagnevacService ,private router:Router, private activatedRoute: ActivatedRoute) { }

 title = 'angular-app';
  fileName= 'ExcelSheet.xlsx';

  ngOnInit(): void {
 this.capservice.getcampagnes()
                  .subscribe(data=>{
                  this.campagnes=data;
               this.campagnes._embedded.campagnes.forEach((c: Campagne) => {
                  if (c.id == this.activatedRoute.snapshot.params.id) {
                      this.camp = c;
                       console.log(this.camp);
                 //je recupere la demographie de cette campagne
               this.capservice.getchartdemo(this.camp)
                    .subscribe(data=>{
                    this.demographie=data;
                    // console.log(this.demographie);
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


                                            // console.log(this.result);

        }


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



        }
        exportexcel(): void
         {

    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }




}
