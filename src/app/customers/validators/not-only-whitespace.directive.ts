import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appNotOnlyWhitespace]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NotOnlyWhitespaceValidatorDirective,
      multi: true
    }
  ],
  standalone: true
})
export class NotOnlyWhitespaceValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (typeof control.value === 'string' && control.value.trim().length === 0) {
      return { notOnlyWhitespace: true };
    }
    return null;
  }
}