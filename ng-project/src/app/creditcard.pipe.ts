import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {

  transform(value:string, type:string): any {
    
    return value[0]+value[1]+ value[2]+ value[3]+"-"+value[4]+ value[5]+ value[6]+ value[7]+"-"
    +value[8]+ value[9]+ value[10]+ value[11]+"-"+value[12]+ value[13]+ value[14]+ value[15];    
}
}