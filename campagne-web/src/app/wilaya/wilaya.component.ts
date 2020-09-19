import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
@Component({
  selector: 'app-wilaya',
  templateUrl: './wilaya.component.html',
  styleUrls: ['./wilaya.component.css']
})
export class WilayaComponent implements OnInit {
  public wilayas; public moughataas;
  constructor(private capservice:CampagnevacService) { }

  ngOnInit(): void {
     this.capservice.getwilaya()
    .subscribe(data=>{
    this.wilayas=data;
    },err=>{
    console.log(err);
    })
  }
  onGetmoughataa(w){
       this.capservice.getmoughata(w)
           .subscribe(data=>{
           this.moughataas=data;
           },err=>{
           console.log(err);
           })
         }
}



