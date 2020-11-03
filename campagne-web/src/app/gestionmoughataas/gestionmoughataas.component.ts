import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
import { Moughataa } from '../model/moughataa.model';
import { DemographieService } from '../services/DemographieService';

@Component({
  selector: 'app-gestionmoughataas',
  templateUrl: './gestionmoughataas.component.html',
  styleUrls: ['./gestionmoughataas.component.css']
})
export class GestionmoughataasComponent implements OnInit {
  public moughataas: any;
  public curent;
  public size: number = 5;
  public currentpage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeyword: string = "";
  public test: string = "";
  public mode: number = 1;
  public de: number = 9;

  constructor(private capservice: CampagnevacService, private router: Router, private demogService: DemographieService) { }

  ngOnInit(): void {

    this.capservice.getmgts(this.currentpage, this.size)
      .subscribe(data => {
        console.log(data);
        this.totalPages = data["page"].totalPages;
        this.pages = new Array<number>(this.totalPages);
        this.moughataas = data;
        this.moughataas = this.moughataas._embedded.moughataas;
        //this.mode=2;
      }, err => {
        console.log(err);
      })
  }

  onSaveMoughataa(data: any) {
    this.capservice.postmoughata(this.capservice.host + "/moughataas", data)
      .subscribe(res => {
        //this.router.navigateByUrl("/demogs")
        this.curent = res;
        //this.router.navigateByUrl("/users");


      }, err => {
        console.log(err);
      })

  }
  onPagedemogs(i) {
    this.currentpage = i;
    this.ngOnInit();
    //this.Chercherdemogs();
  }
  nouvdemo() {
    this.router.navigateByUrl("/nouveau-moughataa")
  }




}

