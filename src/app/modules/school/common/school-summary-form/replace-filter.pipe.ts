import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceFilter'
})
export class ReplaceFilterPipe implements PipeTransform {

  transform(value: string): unknown {
    return value? value.split('_').join(' '): value;
  }

}