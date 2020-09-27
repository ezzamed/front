import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampagnevacService } from '../services/campagnevac.service';
import { Enquete } from '../model/enquete.model';
import { ActivatedRoute } from '@angular/router';
import { Demographie } from '../model/demographie.model';

@Component({
  selector: 'app-nouveau-enquete',
  templateUrl: './nouveau-enquete.component.html',
  styleUrls: ['./nouveau-enquete.component.css']

})
export class NouveauEnqueteComponent implements OnInit {
public curentproduct:Enquete;
public id;
public demographies;
 demo:Demographie
 public moughataas;
 public wilayas;
 curentenquete:Enquete;


  constructor(private capservice:CampagnevacService,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.capservice.getwilaya()
                        .subscribe(data=>{
                         this.wilayas=data;
                         console.log(this.wilayas);
                         this.wilayas._embedded.wilayas.forEach(wilaya=>{
                                  this.capservice.getmoughataawilayaa(wilaya)
                                  .subscribe(data=>{
                                   this.moughataas=data;

                                                          })
                                                           })
                                                            })


  this.capservice.getdemograph1()
                     .subscribe(data=>{
                     this.demographies=data;


     // this.activatedRoute.paramMap.subscribe(params => {
            this.demographies._embedded.demographies.forEach((d: Demographie) => {

              if (d.id == this.activatedRoute.snapshot.params.id) {
                this.demo = d;


                  }

  })
                  })




                  }

    onSavedonnee(dataForm){
             let de;
             de=this.demo.id;

             dataForm.de=de;

                   this.capservice.saveen(this.capservice.host+"/AjouterDonnesDemographie",dataForm)
                   .subscribe(resu=>{
                   console.log(resu);
                   //this.router.navigateByUrl("/demogs")
                   this.curentenquete=resu;
                   },err=>{
                   console.log(err);
                   })


         /* this.capservice.saveEnquetetoDemo(dataForm)
                                 .subscribe(data=>{

                                 },err=>{
                                 console.log(err);
                                 })
                                  console.log( dataForm);*/







  }
   ongetwilayas(){

                   }

      ajoucsv(){
       this.router.navigateByUrl("/upload")
      }



  }


