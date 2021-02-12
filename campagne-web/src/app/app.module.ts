import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemogsComponent } from './demogs/demogs.component';
import { NouveauDemogsComponent } from './nouveau-demogs/nouveau-demogs.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditDemogComponent } from './edit-demog/edit-demog.component';
import { WilayaComponent } from './wilaya/wilaya.component';
import { MoughataaComponent } from './moughataa/moughataa.component';
import { Chart } from 'node_modules/chart.js';
import { MychartComponent } from './mychart/mychart.component';
import { DonneechartComponent } from './donneechart/donneechart.component';
import { LoginComponent } from './login/login.component';
import { EssaiComponent } from './essai/essai.component';
import { NouveauCampagneComponent } from './nouveau-campagne/nouveau-campagne.component';
import { Essai2Component } from './essai2/essai2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'angular2-chartjs';
import { MyChartComponent } from './my-chart/my-chart.component';
import { PdfdownComponent } from './pdfdown/pdfdown.component';
import { TComponent } from './t/t.component';
import { TtComponent } from './tt/tt.component';
import { UsersComponent } from './users/users.component';
import { NouveauUserComponent } from './nouveau-user/nouveau-user.component';
import { ExportpdfComponent } from './exportpdf/exportpdf.component';
import { UploadComponent } from './upload/upload.component';
import { EnquetesComponent } from './enquetes/enquetes.component';
import { CampagnesComponent } from './campagnes/campagnes.component';
import { NouveauEnqueteComponent } from './nouveau-enquete/nouveau-enquete.component';

import { GestionrolesComponent } from './gestionroles/gestionroles.component';
import { GestionmoughataasComponent } from './gestionmoughataas/gestionmoughataas.component';
import { GestionwilayasComponent } from './gestionwilayas/gestionwilayas.component';
import { GestionvaccinationsComponent } from './gestionvaccinations/gestionvaccinations.component';
import { GestionComponent } from './gestion/gestion.component';
import { EditEnqueteComponent } from './edit-enquete/edit-enquete.component';
import { DetailsenqueteComponent } from './detailsenquete/detailsenquete.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NouveauMoughataaComponent } from './nouveau-moughataa/nouveau-moughataa.component';
import { GestionvaccinsComponent } from './gestionvaccins/gestionvaccins.component';
import { EditCampagneComponent } from './edit-campagne/edit-campagne.component';
import { MapComponent } from './map/map.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { WilayaNamePipe } from './pipes/wilaya-name.pipe';
import { IdMoughataaPipe } from './pipes/id-moughataa.pipe';
import { DetailsuserComponent } from './detailsuser/detailsuser.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EditMoughataaComponent } from './edit-moughataa/edit-moughataa.component';
import { EditWilayaComponent } from './edit-wilaya/edit-wilaya.component';
import { AuthGuardService } from './model/connexion.model';


@NgModule({
  declarations: [
    AppComponent,
    DemogsComponent,
    NouveauDemogsComponent,
    EditDemogComponent,
    WilayaComponent,
    MoughataaComponent,
    MychartComponent,
    DonneechartComponent,
    LoginComponent,
    AppComponent,
    EssaiComponent,
    NouveauCampagneComponent,
    Essai2Component,
    DashboardComponent,
    MyChartComponent,
    PdfdownComponent,
    TComponent,
    TtComponent,
    UsersComponent,
    NouveauUserComponent,
    ExportpdfComponent,
    UploadComponent,
    EnquetesComponent,
    CampagnesComponent,
    NouveauEnqueteComponent,
    GestionrolesComponent,
    GestionmoughataasComponent,
    GestionwilayasComponent,
    GestionvaccinationsComponent,
    GestionComponent,
    EditEnqueteComponent,
    DetailsenqueteComponent,
    EditUserComponent,
    NouveauMoughataaComponent,
    GestionvaccinsComponent,
    EditCampagneComponent,
    MapComponent,
    StatistiqueComponent,
    WilayaNamePipe,
    IdMoughataaPipe,
    DetailsuserComponent,
    EditRoleComponent,
    EditMoughataaComponent,
    EditWilayaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ChartModule
   ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})


export class AppModule { }
