import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idMoughataa'
})
export class IdMoughataaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    //return null;
    return this.getId(value);
  }

  getId(href){
    var splitted = href.split('/');
    return splitted[splitted.length-1];
  }

}
