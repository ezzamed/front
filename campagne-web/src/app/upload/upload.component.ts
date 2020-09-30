import { Component, ViewChild } from '@angular/core';
import { Enquete } from '../model/enquete.model';
import { CampagnevacService } from '../services/campagnevac.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent  {
  constructor(private capservice:CampagnevacService,private router:Router) { }

  title = 'Angular7AppReadCSV';

    public records: any[] = [];
    @ViewChild('csvReader') csvReader: any;

    uploadListener($event: any): void {

      let text = [];
      let files = $event.srcElement.files;

      if (this.isValidCSVFile(files[0])) {

        let input = $event.target;
        let reader = new FileReader();
        reader.readAsText(input.files[0]);

        reader.onload = () => {
          let csvData = reader.result;
          let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

          let headersRow = this.getHeaderArray(csvRecordsArray);

          this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
        };

        reader.onerror = function () {
          console.log('error is occured while reading file!');
        };

      } else {
        alert("Please import valid .csv file.");
        this.fileReset();
      }
    }

    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
      let csvArr = [];

      for (let i = 1; i < csvRecordsArray.length; i++) {
        let curruntRecord = (<string>csvRecordsArray[i]).split(',');
        if (curruntRecord.length == headerLength) {
          let enquete: Enquete = new Enquete();

          enquete.nb011 = Number.parseInt(curruntRecord[0].toString());
          enquete.nb1259 = Number.parseInt(curruntRecord[1]);
          enquete.popvisee = Number.parseInt(curruntRecord[2]);
           csvArr.push(enquete);
        }
      }
      return csvArr;
    }

    isValidCSVFile(file: any) {
      return file.name.endsWith(".csv");
    }

    getHeaderArray(csvRecordsArr: any) {
      let headers = (<string>csvRecordsArr[0]).split(',');
      let headerArray = [];
      for (let j = 0; j < headers.length; j++) {
        headerArray.push(headers[j]);
      }
      return headerArray;
    }

    fileReset() {
      this.csvReader.nativeElement.value = "";
      this.records = [];

    }
     sendDataToServer(){

       this.records.forEach(record=>{
       this.capservice.saveRessource2(this.capservice.host+"/enquetes",record)
       .subscribe(data=>{

            },err=>{
             console.log(err);
             })


        });
      }


  }
