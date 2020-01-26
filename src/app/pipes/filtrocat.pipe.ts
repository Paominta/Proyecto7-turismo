import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrocat'
})
export class FiltrocatPipe implements PipeTransform {

  transform(arreglo: any[], cat?: string): any[] {

    if (cat === '') {
      return arreglo;
    }

    cat = cat.toLowerCase();
    return arreglo.filter(item => {
      return item.categoria
      .includes(cat);
    });

    console.log('arreglooo', arreglo);
  }

}
