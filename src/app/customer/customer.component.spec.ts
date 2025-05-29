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

  it('should show error if name is empty on submit', () => {
    component.name = '';
    component.address = '123 Main St';
    component.email = 'test@example.com';
    component.onSubmit();
    expect(component.nameError).toBe('Name is required.');
  });

  it('should show error if address is empty on submit', () => {
    component.name = 'John Doe';
    component.address = '';
    component.email = 'test@example.com';
    component.onSubmit();
    expect(component.addressError).toBe('Address is required.');
  });

  it('should show error if email is invalid on submit', () => {
    component.name = 'John Doe';
    component.address = '123 Main St';
    component.email = 'invalid-email';
    component.onSubmit();
    expect(component.emailError).toBe('Please enter a valid email address.');
  });

  it('should not set errors if all fields are valid', () => {
    component.name = 'John Doe';
    component.address = '123 Main St';
    component.email = 'test@example.com';
    component.onSubmit();
    expect(component.nameError).toBe('');
    expect(component.addressError).toBe('');
    expect(component.emailError).toBe('');
  });
});
