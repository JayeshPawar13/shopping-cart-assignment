import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AddToCartService } from 'src/app/add-to-cart.service';
import { Categories, Products } from '../home.interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products!: Products[];
  addToCartItems: any[] = [];
  categories: Categories[] = [];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cartService: AddToCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.fetchProducts().subscribe((res) => {
        this.products = res.filter(
          (item) =>
            item.category == this.route.snapshot.paramMap.get('category-key')
        );
      });
    });
    this.fetchCategories().subscribe((res) => {
      this.categories = res.sort((item) => item.order);
    });
  }

  fetchProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(
      '../../assets/server/products/index.get.json'
    );
  }

  addToCart(item: Products) {
    let cart = this.cartService.products.value;
    cart = cart.filter((i) => i.id !== item.id);
    cart.push(item);
    this.cartService.products.next(cart);
  }

  fetchCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(
      '../../assets/server/categories/index.get.json'
    );
  }

  navigateToCategory(key: string) {
    this.router.navigate(['/category', key]);
  }
}
