import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phoneNumber: string): string {
    if (phoneNumber.length !== 12) {
      return phoneNumber;
    }
    return `+${phoneNumber.substring(0, 3)} (${phoneNumber.substring(3, 5)}) ${phoneNumber.substring(5, 8)}-${phoneNumber.substring(8, 10)}-${phoneNumber.substring(10)}`;
  }
}
