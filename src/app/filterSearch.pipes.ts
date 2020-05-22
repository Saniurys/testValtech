import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtro' })
export class filterSearch implements PipeTransform {
    transform(value: any[], term: string): any[] {

        if (term) {
            return value.filter((x: any) => x.nombre.toLowerCase().search(term.toLowerCase()) ||
                x.id.toLowerCase().search(term.toLowerCase())
            )
        } else {
            return value;
        }

    }

}