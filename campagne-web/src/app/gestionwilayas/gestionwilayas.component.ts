import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { Wilaya } from '../model/wilaya.model';
import { Router } from '@angular/router';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-gestionwilayas',
  templateUrl: './gestionwilayas.component.html',
  styleUrls: ['./gestionwilayas.component.css']
})
export class GestionwilayasComponent implements OnInit {
public wilayas;
  public curent;
  public size: number = 5;
  public currentpage: number = 0;
  public totalPages: number;
  public pages: Array<number>;
  public currentKeyword: string = "";
  public test: string = "";
  public mode: number = 1;
  public de: number = 9;
  constructor(private capservice:CampagnevacService,private router:Router,private demogService: DemographieService) { }

  ngOnInit(): void {
  this.capservice.getwilayapage(this.currentpage, this.size)
                      .subscribe(data=>{
                         this.totalPages = data["page"].totalPages;
                         this.pages = new Array<number>(this.totalPages);
                         this.wilayas = data;
                         //console.log(this.wilayas);
                            },err=>{
                          console.log(err);
                        })
      }
      onSaveWilaya(data:any){
            this.capservice.postwilaya(this.capservice.host+"/wilayas",data)
            .subscribe(res=>{
            //this.router.navigateByUrl("/demogs")
            this.curent=res;
            //this.router.navigateByUrl("/users");


            },err=>{
            console.log(err);
            })
      }
      onPagedemogs(i) {
          this.currentpage = i;
          this.ngOnInit();
          //this.Chercherdemogs();
        }


Deletewilaya(w){
            let conf=confirm("êtes-vous sûr de vouloir supprimer ce wilaya?");
            if(conf){
              this.demogService.deleteWilaya(w.id);
                this.router.navigateByUrl("/gestionwilayas");

            }

            }
             Editwilaya(w){

                                               //console.log(d);
              //let url=a._links.self.href;
              //this.router.navigateByUrl("/edit-user/"+btoa(url));
             // console.log(w.id);

              this.router.navigate(['edit-wilaya/',w.id]);

                       }






}
