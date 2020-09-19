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

  constructor(private capservice:CampagnevacService,private router:Router) { }

  ngOnInit(): void {
                }
   onSaveUser(data:any){
      this.capservice.saveRessource1(this.capservice.host+"/appUsers",data)
      .subscribe(res=>{
      //this.router.navigateByUrl("/demogs")
      this.curentproduct=res;
      this.router.navigateByUrl("/users");
      },err=>{
      console.log(err);
      })
}
    nouveauser(){
    this.router.navigateByUrl("/nouveau-user")
    }

}

