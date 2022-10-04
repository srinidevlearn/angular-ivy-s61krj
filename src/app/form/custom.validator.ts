import { AbstractControl, ValidatorFn } from '@angular/forms';

export function Gender(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null =>
    control.value !== 'M' || control.value !== 'F'
      ? null
      : { gender: control.value };
}
