import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WilayaComponent } from './wilaya/wilaya.component';
import { DemogsComponent } from './demogs/demogs.component';
import { DonneechartComponent } from './donneechart/donneechart.component';
import { NouveauDemogsComponent } from './nouveau-demogs/nouveau-demogs.component';
import { NouveauCampagneComponent } from './nouveau-campagne/nouveau-campagne.component';
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';
import { MychartComponent } from './mychart/mychart.component';
import { LoginComponent } from './login/login.component';
import { EditDemogComponent } from './edit-demog/edit-demog.component';
import { EssaiComponent } from './essai/essai.component';
import { Essai2Component } from './essai2/essai2.component';
import {  DashboardComponent } from './dashboard/dashboard.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { TComponent } from './t/t.component';
import { TtComponent } from './tt/tt.component';
import { UsersComponent } from './users/users.component';
import { PdfdownComponent } from './pdfdown/pdfdown.component';
import { ExportpdfComponent } from './exportpdf/exportpdf.component';
import { UploadComponent } from './upload/upload.component';
import { EnquetesComponent } from './enquetes/enquetes.component';
import { CampagnesComponent } from './campagnes/campagnes.component';
import { NouveauEnqueteComponent } from './nouveau-enquete/nouveau-enquete.component';

import { GestionrolesComponent } from './gestionroles/gestionroles.component';
import { GestionmoughataasComponent } from './gestionmoughataas/gestionmoughataas.component';
import { GestionwilayasComponent } from './gestionwilayas/gestionwilayas.component';
import { GestionvaccinationsComponent } from './gestionvaccinations/gestionvaccinations.component';
import { EditEnqueteComponent } from './edit-enquete/edit-enquete.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditWilayaComponent } from './edit-wilaya/edit-wilaya.component';
import { EditMoughataaComponent } from './edit-moughataa/edit-moughataa.component';
import { DetailsenqueteComponent } from './detailsenquete/detailsenquete.component';
import { DetailsuserComponent } from './detailsuser/detailsuser.component';
import { GestionComponent } from './gestion/gestion.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NouveauMoughataaComponent } from './nouveau-moughataa/nouveau-moughataa.component';
import { GestionvaccinsComponent } from './gestionvaccins/gestionvaccins.component';
import { EditCampagneComponent } from './edit-campagne/edit-campagne.component';
import { MapComponent } from './map/map.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { AuthGuardService } from './model/connexion.model';
const routes: Routes = [
{
path:"demogs",component:DemogsComponent,canActivate: [AuthGuardService]
},
{
path:"t",component:DemogsComponent,canActivate: [AuthGuardService]
},
{
path:"nouveau-demogs",component:NouveauDemogsComponent,canActivate: [AuthGuardService]
},
{
path:"edit-demog/:id",component:EditDemogComponent,canActivate: [AuthGuardService]
},
{
path:"edit-moughataa/:id",component:EditMoughataaComponent,canActivate: [AuthGuardService]
},
{
path:"wilaya",component:WilayaComponent,canActivate: [AuthGuardService]
},
{
path:"mychart",component:MychartComponent,canActivate: [AuthGuardService]
},
{
path:"donneechart",component:DonneechartComponent,canActivate: [AuthGuardService]
},
{
path:"login",component:LoginComponent
},
{
path:"essai",component:EssaiComponent,canActivate: [AuthGuardService]
},
{
path:"nouveau-campagne",component:NouveauCampagneComponent,canActivate: [AuthGuardService]
},
{
path:"essai2",component:Essai2Component,canActivate: [AuthGuardService]
},
{
path:"dashboard/:id",component:DashboardComponent,canActivate: [AuthGuardService]
},
{
path:"my-chart",component:MyChartComponent,canActivate: [AuthGuardService]
},
{
path:"t/:id",component:TComponent,canActivate: [AuthGuardService]
},
{
path:"tt",component:TtComponent,canActivate: [AuthGuardService]
},
{
path:"users",component:UsersComponent,canActivate: [AuthGuardService]
},
{
path:"nouveau-user",component:NouveauUserComponent,canActivate: [AuthGuardService]
},
{
path:"pdfdown",component:PdfdownComponent,canActivate: [AuthGuardService]
},
{
path:"exportpdf/:id",component:ExportpdfComponent,canActivate: [AuthGuardService]
},
{
path:"upload/:id",component:UploadComponent,canActivate: [AuthGuardService]
},
{
path:"enquetes",component:EnquetesComponent,canActivate: [AuthGuardService]
},
{
path:"campagnes",component:CampagnesComponent,canActivate: [AuthGuardService]
},
{
path:"nouveau-enquete/:id",component:NouveauEnqueteComponent,canActivate: [AuthGuardService]
},
{
path:"statistique",component:StatistiqueComponent,canActivate: [AuthGuardService]
},

{
path:"gestionroles",component:GestionrolesComponent,canActivate: [AuthGuardService]
},
{
path:"gestionmoughataas",component:GestionmoughataasComponent,canActivate: [AuthGuardService]
},
{
path:"gestionwilayas",component:GestionwilayasComponent,canActivate: [AuthGuardService]
},
{
path:"gestionvaccinations",component:GestionvaccinationsComponent,canActivate: [AuthGuardService]
},
{
path:"edit-enquete/:id",component:EditEnqueteComponent,canActivate: [AuthGuardService]
},
{
path:"edit-role/:id",component:EditRoleComponent,canActivate: [AuthGuardService]
},
{
path:"edit-wilaya/:id",component:EditWilayaComponent,canActivate: [AuthGuardService]
},
{
path:"detailsenquete/:id",component:DetailsenqueteComponent,canActivate: [AuthGuardService]
},
{
path:"detailsuser/:id",component:DetailsuserComponent,canActivate: [AuthGuardService]
},
{
path:"edit-user/:id",component:EditUserComponent,canActivate: [AuthGuardService]
},
{
path:"gestion",component:GestionComponent,canActivate: [AuthGuardService]
},
{
path:"nouveau-moughataa",component:NouveauMoughataaComponent,canActivate: [AuthGuardService]
},
{
path:"gestionvaccins",component:GestionvaccinsComponent,canActivate: [AuthGuardService]
},
{
path:"edit-campagne/:id",component:EditCampagneComponent,canActivate: [AuthGuardService]
},
{
path:"map",component:MapComponent,canActivate: [AuthGuardService]

},
{
path:"statistique/:id",component:StatistiqueComponent,canActivate: [AuthGuardService]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
