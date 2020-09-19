import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-donneechart',
  templateUrl: './donneechart.component.html',
  styleUrls: ['./donneechart.component.css']
})
export class DonneechartComponent implements OnInit {
public moughataas;
public enquetes;
public moughat ;
public currentmoughataa;
public vaccinations;
  constructor(private capservice:CampagnevacService,private httpClient:HttpClient) { }

  ngOnInit(): void {
 //this.currentmoughataa=m;
 /*this.capservice.getmoughata1()
 .subscribe(data=>{
 this.moughataas=data;
 this.moughataas._embedded.moughataas.forEach(moughata=>{
 //this.capservice.getchartmoughata1(moughata)
 //.subscribe(data=>{
 //moughata.enquetes=data;
 //this.capservice.getchartmoughata2(moughata)
 // .subscribe(data=>{
 moughata.vaccinations=data;
 },err=>{
 console.log(err);
 })

 })
 //},err=>{
 //console.log(err);
 //})
 })*/

}


}
