import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'planetId',
  standalone: true,
})
export class PlanetIdPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('/').slice(-1)[0];
  }
}
