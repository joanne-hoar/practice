import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartComponent } from './add-to-cart.component';

describe('AddToCartComponent', () => {
  let component: AddToCartComponent;
  let fixture: ComponentFixture<AddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have quantity initialized to 0', () => {
    expect(component.quantity()).toBe(0);
  });

  it('should emit addToCart event when onAddToCart is called', () => {
    spyOn(component.addToCart, 'emit');
    component.onAddToCart();
    expect(component.addToCart.emit).toHaveBeenCalled();
  });

  it('should emit removeFromCart event when onRemoveFromCart is called', () => {
    spyOn(component.removeFromCart, 'emit');
    component.onRemoveFromCart();
    expect(component.removeFromCart.emit).toHaveBeenCalled();
  });
});
