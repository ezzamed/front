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
  constructor(private capservice:CampagnevacService,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
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
              //console.log( dataForm);

          this.capservice.saveRessourcecen(this.capservice.host+"/enquetes",dataForm)
                                 .subscribe(data=>{
                                 console.log(dataForm);
                                 },err=>{
                                 console.log(err);
                                 })


  }

      ajoucsv(){
       this.router.navigateByUrl("/upload")
      }





  }


