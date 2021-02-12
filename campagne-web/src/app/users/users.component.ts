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
 //public totalPages:number;
 //public pages:Array<number>;
 public currentKeyword: string="";
 public mode:number=1;
   totalpages:number;
   Pages:Array<number>;

  constructor(private capservice:CampagnevacService ,private router:Router, private demogService:DemographieService) { }

  ngOnInit(): void {
    this.capservice.getpageusers(this.currentpage,this.size)
                 .subscribe(data=>{

                   this.totalpages=data.totalPages;
                   this.Pages=new Array(this.totalpages);
                   this.appUsers=data;
                   //this.mode=2;
                   },err=>{
                   console.log(err);
                   })

  /* this.capservice.getusers()
                 .subscribe(data=>{

               console.log(data)
                   this.appUsers=data;

                   },err=>{
                   console.log(err);
                   })*/
                    }
                     onPagedemogs(i){
                      this.currentpage=i;
                      this.ngOnInit();
                      //this.Chercherdemogs();
                      }



        Deleteuser(a){
            let conf=confirm("êtes-vous sûr de vouloir supprimer cet utilisateur");
            if(conf){
              this.demogService.deleteUser(a.id);
                this.router.navigateByUrl("/users");

            }

            }
             Editduser(a){

                                               //console.log(d);
              //let url=a._links.self.href;
              //this.router.navigateByUrl("/edit-user/"+btoa(url));
               this.router.navigate(['edit-user/',a.id]);

                      }

               nouveauser(){
              this.router.navigateByUrl("/nouveau-user");
              }
              onselect(a){
                  this.router.navigate(['/detailsuser',a.id]);
              }
              onChercher(form: any){
                  this.currentpage=0;
                  this.currentKeyword=form.keyword;
                  this.Chercherdemogs();}
                Chercherdemogs(){
                this.capservice.getuserBykeyword(this.currentKeyword,this.currentpage,this.size)
                  .subscribe(data=>{
                // this.totalpages=data.totalPages;
                                   // this.Pages=new Array(this.totalpages);
                                    //this.appUsers=data;
                    },err=>{
                    console.log(err);
                    });
                    }




}
