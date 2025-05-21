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
});
