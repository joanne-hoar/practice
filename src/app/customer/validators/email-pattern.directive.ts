import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appEmailPattern]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailPatternValidatorDirective,
      multi: true
    }
  ],
  standalone: true
})
export class EmailPatternValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    // Allow blank value (valid)
    if (!control.value) {
      return null;
    }
    // If not blank, must match pattern
    if (! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value)) {
      return { emailPattern: true };
    }
    return null;
  }
}