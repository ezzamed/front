import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
import { DemographieService } from '../services/DemographieService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public appUsers;
public users;
public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public mode:number=1;

  constructor(private capservice:CampagnevacService ,private router:Router, private demogService:DemographieService) { }

  ngOnInit(): void {
   this.capservice.getusers()
                 .subscribe(data=>{

               console.log(data)
                   this.appUsers=data;

                   },err=>{
                   console.log(err);
                   })
                    }



        Deleteuser(a){
            let conf=confirm("etes vous sur");
            if(conf){
              this.demogService.deleteUser(a.id);
            }
            }
             Editduser(a){

                                               //console.log(d);
              let url=a._links.self.href;
              this.router.navigateByUrl("/edit-user/"+btoa(url));

                       }

               nouveauser(){
              this.router.navigateByUrl("/nouveau-user");
              }
              onselect(a){
              }




}
