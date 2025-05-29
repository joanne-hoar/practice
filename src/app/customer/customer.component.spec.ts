import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerComponent } from './customer.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty form fields by default', () => {
    expect(component.name).toBe('');
    expect(component.email).toBe('');
    expect(component.address).toBe('');
  });

  it('should mark name as invalid if empty or whitespace', () => {
    const nameInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="name"]');
    nameInput.value = '   ';
    nameInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(nameInput.classList).toContain('ng-invalid');
  });

  it('should not mark email as invalid if blank', () => {
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="email"]');
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(emailInput.classList).not.toContain('ng-invalid');
  });

  it('should mark email as invalid if not a valid email and not blank', () => {
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="email"]');
    emailInput.value = 'invalid-email';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(emailInput.classList).toContain('ng-invalid');
  });

  it('should mark address as invalid if empty or whitespace', () => {
    const addressInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="address"]');
    addressInput.value = '   ';
    addressInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(addressInput.classList).toContain('ng-invalid');
  });

  it('should enable submit button only if form is valid', () => {
    const nameInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="name"]');
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="email"]');
    const addressInput: HTMLInputElement = fixture.nativeElement.querySelector('input[name="address"]');
    const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button[type="submit"]');

    // Initially invalid
    expect(submitButton.disabled).toBeTrue();

    // Fill valid values (leave email blank)
    nameInput.value = 'John Doe';
    nameInput.dispatchEvent(new Event('input'));
    emailInput.value = '';
    emailInput.dispatchEvent(new Event('input'));
    addressInput.value = '123 Main St';
    addressInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(submitButton.disabled).toBeFalse();
  });
});
