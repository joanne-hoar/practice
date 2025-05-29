import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading input', () => {
    component.heading = 'Test Heading';
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Test Heading');
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/home"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/products/grocery"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/products/clothing"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/products/stationary"]')).toBeTruthy();
    expect(compiled.querySelector('a[routerLink="/order"]')).toBeTruthy();
  });
});
