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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have count initialized to 0', () => {
    expect(component.count).toBe(0);
  });

  it('should render product name, image, and description', () => {
    component.details.name = 'Test Product';
    component.details.image = 'test.jpg';
    component.details.description = 'Test Description';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Test Product');
    expect(compiled.querySelector('img')?.getAttribute('src')).toContain('test.jpg');
    expect(compiled.querySelector('p')?.textContent).toContain('Test Description');
  });
});
