import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'isValidInput'
})
export class IsValidInputPipe implements PipeTransform {

  transform(value: string): boolean {
    return !value.includes('/')
  }
}
