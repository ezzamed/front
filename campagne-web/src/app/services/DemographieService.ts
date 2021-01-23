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
    deletemoughataa(id){
            this.httpClient.delete(this.api+"supprimermoughataa/"+id).subscribe();
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
         deleteWilaya(id){
                    this.httpClient.delete(this.api+"supprimerWilaya/"+id).subscribe();
                }

          deleteVaccin(id){
                            this.httpClient.delete(this.api+"supprimerVaccin/"+id).subscribe();
                        }

        updateEnquete(enquete){
            return this.httpClient.put(this.api+"modifierEnquete", enquete).subscribe();
        }


        onUpdateWilaya(wilaya){
            return this.httpClient.put(this.api+"modifierWilaya", wilaya).subscribe();
        }
         updateRole(appRole){
                    return this.httpClient.put(this.api+"modifierRole", appRole).subscribe();
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

          deleterole(id){
                     this.httpClient.delete(this.api+"supprimerole/"+id).subscribe();
                     }


}
