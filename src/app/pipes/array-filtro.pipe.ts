import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'arrayFiltro'
})
export class ArrayFiltroPipe implements PipeTransform {
    transform(value: Array<any>, filtro: string, type: string): any {
        if (filtro) {
            filtro = filtro.toUpperCase();
            
            return value.filter(a => {
                const naturally = a.location.country.toUpperCase().indexOf(filtro) >= 0;
                const name = a.name.first.toUpperCase().indexOf(filtro) >= 0 || a.name.last.indexOf(filtro) >= 0
                return type === 'name' ? name : naturally;
            }
            );
        } else {
            // Quando filtro for vazio ou nulo,
            // retornamos o próprio array
            return value;
        }
    }
}