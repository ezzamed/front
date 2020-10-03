import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from '../model/appuser.model';
import { CampagnevacService } from '../services/campagnevac.service';
import { DemographieService } from '../services/DemographieService';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public curentproduct: AppUser;
  public url: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private demogService: DemographieService, private capservice: CampagnevacService) { }

    ngOnInit(): void {
    this.url=atob(this.activatedRoute.snapshot.params.id)
     this.capservice.getRessourceappuser(this.url)
       .subscribe(data=>{
         this.curentproduct=data;
         },err=>{
         console.log(err);})
    }
    onUpdateUser(user) {
      this.demogService.updateUser(user);
      this.router.navigateByUrl("/users");



    }

}
