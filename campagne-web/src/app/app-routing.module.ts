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
path:"upload",component:UploadComponent
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
