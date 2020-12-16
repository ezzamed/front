import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampagnevacService } from '../services/campagnevac.service';
import { Enquete } from '../model/enquete.model';
import { ActivatedRoute } from '@angular/router';
import { Demographie } from '../model/demographie.model';
import { DemographieService } from '../services/DemographieService';

@Component({
  selector: 'app-nouveau-enquete',
  templateUrl: './nouveau-enquete.component.html',
  styleUrls: ['./nouveau-enquete.component.css']

})
export class NouveauEnqueteComponent implements OnInit {
public curentproduct:Enquete;
public idenq;
public demographies;
 demo:Demographie
 public moughataas;
 public wilayas;
 curentenquete:Enquete;

 public selectedWilayaId;
 public selectedMoughataaId;
 public id;


  constructor(private capservice:CampagnevacService,private router:Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService) { }

  ngOnInit(): void {
  this.capservice.getwilaya()
                        .subscribe(data=>{
                         this.wilayas=data;
                         console.log(this.wilayas);
                        });
                                                 /*this.wilayas.forEach(wilaya=>{
                                  this.capservice.getmoughataawilayaa(wilaya.id)
                                  .subscribe(data=>{
                                   this.moughataas=data;
                                                          })
                                                           })
                                                            })

*/
this.idenq= this.activatedRoute.snapshot.params.id;


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

//<<<<<<< HEAD
      dataForm.popvisee = parseInt(dataForm.nb011) + parseInt(dataForm.nb1259);
      //console.log(this.selectedWilayaId);
//=======
   //dataForm.popvisee = parseInt(dataForm.nb011) + parseInt(dataForm.nb1259);
//>>>>>>> 0f04c53db63dfbb154f52abf4cc0b752626647d5
      this.wilayas.map((w)=>{
        if(w.id==this.selectedWilayaId){
          dataForm.wilaya=null;
           //console.log(dataForm);
        }
      })
      this.moughataas.map((m)=>{
        if(m.id==this.selectedMoughataaId)
          dataForm.moughataa = m;

      })
      this.demogService.getDemographie(this.demo.id).subscribe((demog)=>{
        dataForm.demographie = demog;
        console.log(dataForm);
        this.capservice.saveEnquetetoDemo(dataForm).subscribe((res)=>{
          this.router.navigateByUrl("/t/"+this.activatedRoute.snapshot.params.id);
        })
      })

      /*
             let de;
             de=this.demo.id;
             dataForm.de=de;
                   this.capservice.saveen(this.capservice.host+"/AjouterDonnesDemographie",dataForm)
                   .subscribe(data=>{
                   console.log(data);
                   //this.router.navigateByUrl("/demogs")
                   this.curentenquete=data;
                   },err=>{
                   console.log(err);
                   })*/
         /* this.capservice.saveEnquetetoDemo(dataForm)
                                 .subscribe(data=>{

                                 },err=>{
                                 console.log(err);
                                 })
                                  console.log( dataForm);*/
  }
  getMoughataas(wilaya){
    this.selectedWilayaId = wilaya;
    this.demogService.getWilayaMoughataa(wilaya).subscribe((data)=>{
      this.moughataas = data;
      console.log(this.moughataas);
    })
  }

  setSelectedMoughataa(mgt){
    console.log(mgt)
    this.selectedMoughataaId = mgt;
  }

      ajoucsv(){
       this.router.navigate(['/upload',this.idenq]);
      }



  }


