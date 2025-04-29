import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isInstanceOf'
})
export class IsInstanceOfPipe implements PipeTransform {
  transform<T>(value: unknown, target: any): value is T {
    return value instanceof target;
  }
}
