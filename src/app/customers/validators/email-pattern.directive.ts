import { Directive, Input } from '@angular/core';
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
  @Input('appEmailPattern') pattern = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$';

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && !new RegExp(this.pattern).test(control.value)) {
      return { emailPattern: true };
    }
    return null;
  }
}