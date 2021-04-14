import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldfilter'
})
export class FieldfilterPipe implements PipeTransform {

  transform(list: any[], filterText: string,field: string): any {
    return list ? list.filter(item => item[field].search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
