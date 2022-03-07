import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
   name : 'ngn'
})
export class NgnPipe implements PipeTransform {
   transform(val) : string {
      return "NGN" + val;
   }
}