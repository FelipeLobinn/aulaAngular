import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diary'
})
export class DiaryPipe implements PipeTransform {

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(value: any) {
    const diary = 60;
    const quant = value.split(' ').slice(0,1);
    if(!isNaN(quant)){
      return Math.floor(quant[0]/diary * 100) / 100;
    }
    return null;
  }
}
