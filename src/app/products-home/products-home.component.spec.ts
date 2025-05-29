import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsHomeComponent } from './products-home.component';
import { provideRouter } from '@angular/router';

describe('ProductsHomeComponent', () => {
  let component: ProductsHomeComponent;
  let fixture: ComponentFixture<ProductsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsHomeComponent],
      providers: [provideRouter([])]

    }).compileComponents();

    fixture = TestBed.createComponent(ProductsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a products array', () => {
    expect(Array.isArray(component.products)).toBeTrue();
  });

  it('should render header and footer components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should filter products by category', async () => {
    const mockProducts = [
      { name: 'A', category: 'grocery', image: '', description: '' },
      { name: 'B', category: 'clothing', image: '', description: '' }
    ];
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      json: () => Promise.resolve(mockProducts)
    } as Response));

    await component.fetchProducts('grocery');
    // Wait for any pending promises/microtasks
    await fixture.whenStable?.(); 
    fixture.detectChanges();
    expect(component.products.length).toBe(1);
    expect(component.products[0].category).toBe('grocery');
  });
});
