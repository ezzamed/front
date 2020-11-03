import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'wilayaName'
})
export class WilayaNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //return null;
    return this.getWilayaName(value);
  }

  constructor(private http:HttpClient){}

  getWilayaName(href){
    return this.http.get(href);
  }

}
