import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AddToCartService } from './add-to-cart.service';
import { AppComponent } from './app.component';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let cartService: AddToCartService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [AddToCartService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(AddToCartService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute ngOnInit', () => {
    cartService.products.next([
      {
        name: 'Capsicum - Green, 1 kg',
        imageURL: '',
        description:
          'Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.',
        price: 137,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-capsicum-1',
        id: '5b6c6bdc01a7c38429530886',
      },
    ]);
    spyOn(component, 'fetchCategories').and.returnValue(
      of([
        {
          name: 'Beverages',
          key: 'beverages',
          description:
            'Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ',
          enabled: true,
          order: 3,
          imageUrl: '../../assets/static/images/category/beverages.png',
          id: '5b675e5e5936635728f9fc30',
        },
        {
          name: 'Fruits & Vegetables',
          key: 'fruit-and-veg',
          description: 'A variety of fresh fruits and vegetables.',
          enabled: true,
          order: 1,
          imageUrl: '../../assets/static/images/category/fruits.png',
          id: '5b6899953d1a866534f516e2',
        },
      ])
    );
    fixture.detectChanges();
    expect(component.cartItems).toBeDefined();
  });

  it('should execute fetchCategories', () => {
    expect(component.fetchCategories()).toBeTruthy();
  });

  it('should execute navigateToRegistration', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToRegistration('register');
    expect(navigateSpy).toHaveBeenCalledWith([
      '/login-registration',
      'register',
    ]);
  });

  it('should execute navigateHome', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should execute navigateToCategory', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.navigateToCategory('abc');
    expect(navigateSpy).toHaveBeenCalledWith(['/category', 'abc']);
  });
});
