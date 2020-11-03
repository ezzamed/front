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
import { DetailsenqueteComponent } from './detailsenquete/detailsenquete.component';
import { GestionComponent } from './gestion/gestion.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NouveauMoughataaComponent } from './nouveau-moughataa/nouveau-moughataa.component';
import { GestionvaccinsComponent } from './gestionvaccins/gestionvaccins.component';
import { EditCampagneComponent } from './edit-campagne/edit-campagne.component';
import { MapComponent } from './map/map.component';
import { StatistiqueComponent } from './statistique/statistique.component';
const routes: Routes = [
{
path:"demogs",component:DemogsComponent
},
{
path:"nouveau-demogs",component:NouveauDemogsComponent
},
{
path:"edit-demog/:id",component:EditDemogComponent
},
{
path:"wilaya",component:WilayaComponent
},
{
path:"mychart",component:MychartComponent
},
{
path:"donneechart",component:DonneechartComponent
},
{
path:"login",component:LoginComponent
},
{
path:"essai",component:EssaiComponent
},
{
path:"nouveau-campagne",component:NouveauCampagneComponent
},
{
path:"essai2",component:Essai2Component
},
{
path:"dashboard/:id",component:DashboardComponent
},
{
path:"my-chart",component:MyChartComponent
},
{
path:"t/:id",component:TComponent
},
{
path:"tt",component:TtComponent
},
{
path:"users",component:UsersComponent
},
{
path:"nouveau-user",component:NouveauUserComponent
},
{
path:"pdfdown",component:PdfdownComponent
},
{
path:"exportpdf/:id",component:ExportpdfComponent
},
{
path:"upload/:id",component:UploadComponent
},
{
path:"enquetes",component:EnquetesComponent
},
{
path:"campagnes",component:CampagnesComponent
},
{
path:"nouveau-enquete/:id",component:NouveauEnqueteComponent
},
{
path:"statistique",component:StatistiqueComponent
},

{
path:"gestionroles",component:GestionrolesComponent
},
{
path:"gestionmoughataas",component:GestionmoughataasComponent
},
{
path:"gestionwilayas",component:GestionwilayasComponent
},
{
path:"gestionvaccinations",component:GestionvaccinationsComponent
},
{
path:"edit-enquete/:id",component:EditEnqueteComponent
},
{
path:"detailsenquete/:id",component:DetailsenqueteComponent
},
{
path:"edit-user/:id",component:EditUserComponent
},
{
path:"gestion",component:GestionComponent
},
{
path:"nouveau-moughataa",component:NouveauMoughataaComponent
},
{
path:"gestionvaccins",component:GestionvaccinsComponent
},
{
path:"edit-campagne/:id",component:EditCampagneComponent
},
{
path:"map",component:MapComponent
},
{
path:"statistique/:id",component:StatistiqueComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
