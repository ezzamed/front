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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule, ChartModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
