import { Component, OnInit } from '@angular/core';
import { CampagnevacService } from '../services/campagnevac.service';
import { AppUser } from '../model/appUser.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nouveau-user',
  templateUrl: './nouveau-user.component.html',
  styleUrls: ['./nouveau-user.component.css']
})
export class NouveauUserComponent implements OnInit {
   public curentproduct:AppUser;
 public appRoles;
 public selectedAppRoleId;
  constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
  this.capservice.onGetroles()
                .subscribe(data=>{
                   this.appRoles=data;
                   //console.log(this.appRoles);
                    },err=>{
                  console.log(err);
                  })
                }
   onSaveUser(data){
  // console.log()

   this.appRoles.map((a)=>{
           if(a.id==this.selectedAppRoleId)
             data.appRole = a;
             console.log(data);

         })
      this.capservice.saveRessource1(data)
      .subscribe(res=>{
      //this.router.navigateByUrl("/demogs")
     // this.curentproduct=res;
      this.router.navigateByUrl("/users");



      })
}
    nouveauser(){
    this.router.navigateByUrl("/nouveau-user")
    }
     setSelectedMoughataa(mgt){
        //console.log(mgt)
        this.selectedAppRoleId = mgt;
      }

}

