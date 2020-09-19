import { Component, OnInit } from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pdfdown',
  templateUrl: './pdfdown.component.html',
  styleUrls: ['./pdfdown.component.css']
})
export class PdfdownComponent implements OnInit    {
public moughataas;
public enquetes;

  constructor(private capservice:CampagnevacService ,private router:Router) { }
   ngOnInit(): void {
   this.capservice.getpromou()
      .subscribe(data=>{
      this.moughataas=data;
      this.moughataas._embedded.moughataas.forEach(moughata=>{
       this.capservice.getchartenquetes(moughata)
       .subscribe(data=>{
       moughata.enquetes=data;

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


   }

  download() {
  const options={
  name:'output.pdf',
 image:{type:'jpeg'},
  html2canvas:{},
  jsPDF:{orientation:'landscape'}
  }
  const element:Element=document.getElementById('table')
  html2pdf()
     .from(element)
     .set(options)
     .save()
     }




}
