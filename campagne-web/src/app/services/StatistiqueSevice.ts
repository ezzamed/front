import { Demographie } from '../model/demographie.model';
import { Campagne } from '../model/campagne.model';
import { Enquete } from '../model/enquete.model';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AppUser } from '../model/appUser.model';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
@Injectable({
    providedIn: 'root'
  })
export class StatistiqueSevice {

    public api:string = "http://localhost:8080/";

    constructor(private httpClient:HttpClient) { }

    //Une campagne par son id
    getCampgane(id){
        return this.httpClient.get(this.api+"campagne/"+id); 
    }
    //Liste des vaccinations d'une campagne
    getCampganeVaccinations(id){
        return this.httpClient.get(this.api+"campagne/vaccinations/"+id); 
    }

    //Liste des moughataas d'une campagne
    getCampagneMoughataas(id){
        return this.httpClient.get(this.api+"campagne/moughataas/"+id); 
    }
    //Enquete d'une campagne et moughataa
    getEnquete(id_campagne, id_moughata){
        return this.httpClient.get(this.api+"campagne/moughataa/enquetes/"+id_campagne+"/"+id_moughata); 
    }

}