import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gestionvaccinations',
  templateUrl: './gestionvaccinations.component.html',
  styleUrls: ['./gestionvaccinations.component.css']
})
export class GestionvaccinationsComponent implements OnInit {
public vaccinations;
    constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.onGetVaccinations()
                    .subscribe(data=>{
                       this.vaccinations=data;
                       console.log(this.vaccinations);                },err=>{
                      console.log(err);
                      })
    }




}
