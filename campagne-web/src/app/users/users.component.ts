import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
public appUsers;
public size:number=5;
 public currentpage:number=0;
 public totalPages:number;
 public pages:Array<number>;
 public currentKeyword: string="";
 public mode:number=1;

  constructor(private capservice:CampagnevacService ,private router:Router) { }

  ngOnInit(): void {
   this.capservice.getusers()
                 .subscribe(data=>{

               console.log(data)
                   this.appUsers=data;

                   },err=>{
                   console.log(err);
                   })
                    /*onPagedemogs(i){
                     this.currentpage=i;
                    // this.onGetdemographie();
                     //this.Chercherdemogs();
                     }
                     onGetdemographie(){

                       }
                       onPagedemogs(i){
                       this.currentpage=i;
                       this.onGetdemographie();
                       //this.Chercherdemogs();
                       }*/



  }
   nouveauser(){
  this.router.navigateByUrl("/nouveau-user")}
  }


