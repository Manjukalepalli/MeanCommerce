import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, FormControl, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinValue]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinValueDirective,
      multi: true
    }
  ]
})
export class MinValueDirective implements Validator {
  @Input()
  appMinValue: number;

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;
    return (v < this.appMinValue) ? { 'appMinValue': true } : null;
  }
  constructor() { }

}
