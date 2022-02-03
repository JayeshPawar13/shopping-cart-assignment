import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AddToCartService } from 'src/app/add-to-cart.service';

import { CategoryComponent } from './category.component';

fdescribe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let cartService: AddToCartService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [CategoryComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    cartService = TestBed.inject(AddToCartService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute addToCart', () => {
    component.addToCart({
      name: 'Capsicum - Green, 1 kg',
      imageURL:
        '../../../assets/static/images/products/fruit-n-veg/capsicum-green.jpg',
      description:
        'Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.',
      price: 137,
      stock: 50,
      category: '5b6899953d1a866534f516e2',
      sku: 'fnw-capsicum-1',
      id: '5b6c6bdc01a7c38429530886',
    });
    expect(component).toBeTruthy();
  });

  it('should execute navigateToCategory', () => {
    const navigateSpy = spyOn(router, 'navigate');
    cartService.products.next([
      {
        name: 'Capsicum - Green, 1 kg',
        imageURL:
          '../../../assets/static/images/products/fruit-n-veg/capsicum-green.jpg',
        description:
          'Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.',
        price: 137,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-capsicum-1',
        id: '5b6c6bdc01a7c38429530886',
      },
      {
        name: 'Tomato - Local, Organically Grown, 500 gm',
        imageURL:
          '../../../assets/static/images/products/fruit-n-veg/capsicum-green.jpg',
        description:
          'Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.',
        price: 12,
        stock: 50,
        category: '5b6899953d1a866534f516e2',
        sku: 'fnw-tomatoes-500',
        id: '5b6c6c1801a7c38429530887',
      },
    ]);
    component.navigateToCategory('abc');
    expect(navigateSpy).toHaveBeenCalledWith(['/category', 'abc']);
  });
});
