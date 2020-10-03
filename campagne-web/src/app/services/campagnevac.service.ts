import { Demographie } from '../model/demographie.model';
import { Campagne } from '../model/campagne.model';
import { Enquete } from '../model/enquete.model';
import { AppRole } from '../model/approle.model';
import { Moughataa } from '../model/moughataa.model';
import { Wilaya } from '../model/wilaya.model';
import { Vaccin } from '../model/vaccin.model';
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { AppUser } from '../model/appUser.model';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})

export class CampagnevacService {

  public moughataas;
  public host:string="http://localhost:8080"
  public d:Demographie;


  constructor(private httpClient:HttpClient) { }

  public getdemogs(page:number,size:number){
  return this.httpClient.get(this.host+"/demographies?page="+page+"&size="+size);
  }
   public getusers(){
        return this.httpClient.get("http://localhost:8080/allUsers");
    }
    public onGetroles(){
     return this.httpClient.get("http://localhost:8080/allRoles");
    }
     public onGetwilayas(){
         return this.httpClient.get("http://localhost:8080/allWilayas");
        }
          public onGetVaccinations(){
                 return this.httpClient.get("http://localhost:8080/allVaccinations");
                }
     public postroles(url,data):Observable<AppRole>{
                   return this.httpClient.post<AppRole>(url,data);
                  }
       public postvaccins(url,data):Observable<Vaccin>{
                         return this.httpClient.post<Vaccin>(url,data);
                        }
     public postmoughata(url,data):Observable<Moughataa>{
           return this.httpClient.post<Moughataa>(url,data);
                                    }
     public postwilaya(url,data):Observable<Wilaya>{
                return this.httpClient.post<Wilaya>(url,data);
                                         }
      public onGetmoughataas(){
          return this.httpClient.get("http://localhost:8080/allMoughataas");
         }
         /*
         deletemethod(){
           return this.httpClient.post("http://localhost:8080/supprimer/id");
         }*/
    getcampagnes(){
    return this.httpClient.get("http://localhost:8080/campagnes");
    }
   public getdemogsBykeyword(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/demographies/search/Bynamedemopage?mc="+mc+"&page="+page+"0&size="+size);
}
  public deleteRessource(url){
      return this.httpClient.delete(url);
      }
  public saveRessource(url,data):Observable<Demographie>{
   return this.httpClient.post<Demographie>(url,data);
  }
   public saveRessource1(url,data):Observable<AppUser>{
     return this.httpClient.post<AppUser>(url,data);
    }
       public saveRessource2(url,data):Observable<Enquete>{
         return this.httpClient.post<Enquete>(url,data);
        }

  public getRessource(url):Observable<Demographie>{
     return this.httpClient.get<Demographie>(url);
}
public getRessourceappuser(url):Observable<AppUser>{
     return this.httpClient.get<AppUser>(url);
}
 public getRessource1(url):Observable<Enquete>{
     return this.httpClient.get<Enquete>(url);
}

public UpdatRessource(url,data):Observable<Demographie>{
   return this.httpClient.put<Demographie>(url,data);
}

public getwilaya(){
  //return this.httpClient.get(this.host+"/wilayas");
  return this.httpClient.get(this.host+"/allWilayas");
}
  getmoughata(w){
  return this.httpClient.get(w._links.moughataas.href);
  }
  public getmoughata1(){
    return this.httpClient.get(this.host+"/moughataas");
    }
   /*getchartmoughata(){
    //let url=moughataas.replace("{?projection}","");http://localhost:8080/moughataas/1?projection=m1
    //return this.httpClient.get(this.host.replace("{?projection}","")+"/moughataas"+"?projection=m1");
    return this.httpClient.get("http://localhost:8080/moughataas");
    }
*/
       /*getchart(){
     let url=this.moughataas._links.vaccinations.href.replace("{?projection}","");
                return this.httpClient.get(url+"?projection=m1");
                }
*/
    /*
    getVaccinations(mou){
    let url=mou._links.vaccinations.href.replace("{?projection}","");
    return this.http.get(url+"?projection=m1");
    }*/
    getchartmoughata(moughataa){
     let url=moughataa._links.enquetes.href.replace("{?projection}","");
     return this.httpClient.get(url+"?projection=e1");
    }

    getdeemog(c){
        return this.httpClient.get(c._links.vaccinations.href);
    }
    onGetdemographiedropdown(){
     return this.httpClient.get("http://localhost:8080/demographies");
    }
    getenquetes(){
         return this.httpClient.get("http://localhost:8080/enquetes");
        }
    public saveRessourceca(url,data):Observable<Campagne>{
       return this.httpClient.post<Campagne>(url,data);
      }
      public saveRessourcecen(url,data):Observable<Enquete>{
             return this.httpClient.post<Enquete>(url,data);
            }
     getchartmoughata1(moughataa){
          let url=moughataa._links.enquetes.href.replace("{?projection}","");
          return this.httpClient.get(url+"?projection=e1");
         }

         getenquetesmoughataa(enquete){
          return this.httpClient.get(enquete._links.moughataa.href);


                  }
     getpromou(){
        return this.httpClient.get("http://localhost:8080/moughataas");
     }
      getvaccinations(){
             return this.httpClient.get("http://localhost:8080/vaccinations");
          }
     getchartenquetes(moughata){
        let url=moughata._links.enquetes.href.replace("{?projection}","");
                 return this.httpClient.get(url+"?projection=e1");

}
getchartvaccinations(moughata){
 let url=moughata._links.vaccinations.href.replace("{?projection}","");
                 return this.httpClient.get(url+"?projection=v1");
}
getchartmoughataa(h){
return this.httpClient.get(h._links.moughataa.href);
}
getmoughataawilayaa(idWilaya){
return this.httpClient.get(this.host+"/wilayaMoughataa/"+idWilaya);
}
onGetwilayadropdown(){
 return this.httpClient.get("http://localhost:8080/wilayas");
}
getVaccins(){
 return this.httpClient.get("http://localhost:8080/allVaccins");
}
onGetmoughatadropdown(){
 return this.httpClient.get("http://localhost:8080/moughataas");
}
ajoutdoneedemo(formData){
}

getEnquetes(demo){

let url=demo._links.enquetes.href.replace("{?projection}","");
                 return this.httpClient.get(url+"?projection=e1");

}
public getdemograph():Observable<Demographie>{
   return this.httpClient.get<Demographie>("http://localhost:8080/demographies");
}

 getdemograph1(){
   return this.httpClient.get("http://localhost:8080/demographies");
}
 getdemograph2(){
   return this.httpClient.get("http://localhost:8080/demographies");
}
 getMyDemo(id) {
        let demographies:Observable<Demographie>=this.getdemograph();
        return demographies.filter(d => d.id==id);
    }
    public exportAsExcelFile(json: any[], excelFileName: string): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      const workbook: XLSX.WorkBook = { Sheets: { 'moughataas': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    private saveAsExcelFile(buffer: any, fileName: string): void {
       const moughataas: Blob = new Blob([buffer], {type: EXCEL_TYPE});
       FileSaver.saveAs(moughataas, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    }


 /*getProduct(id):Observable<Demographie> {
    return this.getdemograph().map((demogras:Demographie) =>
      demogras.filter(d => d.id === id)
    );
    }*/

/*getParticularHero(idi): Observable<Demographie> {
    // Todo: send the message _after_ fetching the hero
    return this.httpClient.get<Demographie>("http://localhost:8080/demographies").filter(d => d.id === idi);

}*/
 addAll(list): Observable<any>{
    return this.httpClient.post("http://localhost:8080/all", list);
  }

  getchartvaccinations2(demo){
   let url=demo._links.vaccinations.href.replace("{?projection}","");
                   return this.httpClient.get(url+"?projection=v1");
  }
  getchartdemo(demo){
   return this.httpClient.get(demo._links.demographie.href);
  }
  getchartenquetes2(data){
  let url=data._links.enquetes.href.replace("{?projection}","");
                   return this.httpClient.get(url+"?projection=e1");
  }
  getcharten(demographie){
   let url=demographie._links.enquetes.href.replace("{?projection}","");
                     return this.httpClient.get(url+"?projection=e1");
  }
  getchartm(e){
    return this.httpClient.get(e._links.moughataa.href);
  }

  getcampagne(v){
    return this.httpClient.get(v._links.campagne.href);

  }
   getchartvac(camp){
     let url=camp._links.vaccinations.href.replace("{?projection}","");
                           return this.httpClient.get(url+"?projection=v1");

    }

    saveEnquetetoDemo(dataForm){
      return this.httpClient.post(this.host+"/AjouterDonnesDemographie",dataForm);
    }
    public saveen(url,dataForm):Observable<Enquete>{

           return this.httpClient.post<Enquete>(url,dataForm);
          }



}
