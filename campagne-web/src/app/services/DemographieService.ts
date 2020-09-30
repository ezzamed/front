import { Demographie } from '../model/demographie.model';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class DemographieService {

    public api:string = "http://localhost:8080/";

    constructor(private httpClient:HttpClient) { }
    
    deleteDemographie(id){
        this.httpClient.delete(this.api+"supprimerDemographie/"+id).subscribe(); 
    }
    updateDemographie(demog){
        return this.httpClient.put(this.api+"modifierDemographie", demog).subscribe(); 
    }

    getDemographie(id){
        return this.httpClient.get(this.api+"getDemographie/"+id);
    }

    getWilayaMoughataa(id){
        return this.httpClient.get(this.api+"wilayaMoughataa/"+id);
    }


}