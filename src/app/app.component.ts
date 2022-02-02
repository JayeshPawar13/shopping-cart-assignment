import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AddToCartService } from './add-to-cart.service';
import { Categories, Products } from './home/home.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shopping-cart-assignment';
  products: any = {};
  cartItems: Products[][] = [];
  categories: Categories[] = [];

  constructor(
    private router: Router,
    private cartService: AddToCartService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.cartService.products.subscribe((res) => {
      console.log(res);

      this.cartItems = [];

      this.products = {};
      res.forEach((item) => {
        if (!this.products[item.id] || !this.products[item.id].length) {
          this.products[item.id] = [];
        }
        (this.products[item.id] as Products[]).push(item);
      });
      console.log(this.products);
      for (const key in this.products) {
        if (Object.prototype.hasOwnProperty.call(this.products, key)) {
          const element = this.products[key];
          this.cartItems.push(element);
        }
      }
      console.log(this.cartItems);
    });
    this.fetchCategories().subscribe((res) => {
      this.categories = res.sort((item) => item.order);
    });
  }

  navigateToRegistration(type: string) {
    this.router.navigate(['/login-registration', type]);
  }

  navigateHome() {
    this.router.navigate(['/']);
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
