import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    // Provide a default details object to avoid undefined errors
    component.details = {
      name: '',
      image: '',
      description: '',
      category: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have count initialized to 1', () => {
    expect(component.count).toBe(1);
  });

  it('should render product name, image, and description', () => {
    component.details = {
      name: 'Test Product',
      image: 'test.jpg',
      description: 'Test Description',
      category: 'test'
    };
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Product');
    expect(compiled.querySelector('img')?.getAttribute('src')).toContain('test.jpg');
    expect(compiled.querySelector('p')?.textContent).toContain('Test Description');
  });
});
