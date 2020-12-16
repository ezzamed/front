import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { AppUser } from '../model/appUser.model';
import { ActivatedRoute } from '@angular/router';
import {EnqueteService} from '../services/enquete.service';
@Component({
  selector: 'app-detailsuser',
  templateUrl: './detailsuser.component.html',
  styleUrls: ['./detailsuser.component.css']
})
export class DetailsuserComponent implements OnInit {
public appUsers;
public user;
  constructor(private capservice:CampagnevacService,
           private activatedRoute: ActivatedRoute,private router:Router, private enqueteService:EnqueteService) { }

  ngOnInit(): void {

   this.capservice.getusers()
                       .subscribe(data=>{
                       this.appUsers=data;
                       console.log(this.appUsers);
                        this.enqueteService.getUser(this.activatedRoute.snapshot.params.id)
                        .subscribe(data=>{
                        this.user=data;
                        console.log(this.user);
                        })



        })

    }



}
