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
     updateCampagne(camp){
            return this.httpClient.put(this.api+"modifierCampagne", camp).subscribe();
        }
     deleteEnquete(id){
            this.httpClient.delete(this.api+"supprimerEnquete/"+id).subscribe();
        }
        updateEnquete(enquete){
            return this.httpClient.put(this.api+"modifierEnquete", enquete).subscribe();
        }

    getDemographie(id){
        return this.httpClient.get(this.api+"getDemographie/"+id);
    }

    getWilayaMoughataa(id){
        return this.httpClient.get(this.api+"wilayaMoughataa/"+id);
    }
    deleteUser(id){
    this.httpClient.delete(this.api+"supprimerUser/"+id).subscribe();
    }
    updateUser(user){
            return this.httpClient.put(this.api+"modifierUser", user).subscribe();
        }
         deleteCampagne(id){
            this.httpClient.delete(this.api+"supprimerCampagne/"+id).subscribe();
            }


}
