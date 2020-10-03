import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { Enquete } from '../model/enquete.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detailsenquete',
  templateUrl: './detailsenquete.component.html',
  styleUrls: ['./detailsenquete.component.css']
})
export class DetailsenqueteComponent implements OnInit {
public enquetes;
enq:Enquete;
 constructor(private capservice:CampagnevacService,
         private activatedRoute: ActivatedRoute,private router:Router) { }


  ngOnInit(): void {
    this.capservice.getenquetes()
                     .subscribe(data=>{
                     this.enquetes=data;


     // this.activatedRoute.paramMap.subscribe(params => {
            this.enquetes._embedded.enquetes.forEach((e: Enquete) => {

              if (e.id == this.activatedRoute.snapshot.params.id) {
                this.enq = e;
               // console.log(this.demo);


              }

          });


      })

  }

}
