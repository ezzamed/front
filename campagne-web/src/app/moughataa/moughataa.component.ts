import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moughataa',
  templateUrl: './moughataa.component.html',
  styleUrls: ['./moughataa.component.css']
})
export class MoughataaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
  onGetchartmoughataa(){
         this.capservice.getchartmoughata()
             .subscribe(data=>{
             this.chartmoughataas=data;
             this.chartmoughataas._embedded.chartmoughataas.forEach(mou=>{
             this.capservice.getVaccinations(mou)
             .subscribe(data=>{
                 mou.vaccinations=data;
                 },err=>{
                 console.log(err);
                 })
             })
             },err=>{
             console.log(err);
             })
           }
*/
}

