import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
export class EnqueteService {

    public api:string = "http://localhost:8080/";

    constructor(private httpClient:HttpClient) { }

    getEnquete(id){
        return this.httpClient.get(this.api+"enquete/getOne/"+id);
    }
    getRole(id){
            return this.httpClient.get(this.api+"appRole/getOne/"+id);
        }
     getUser(id){
            return this.httpClient.get(this.api+"user/getOne/"+id);
        }
 getwilaya(id){
            return this.httpClient.get(this.api+"wilaya/getOnewilaya/"+id);
        }

}
