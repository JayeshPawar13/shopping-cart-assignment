import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from '../home.interfaces';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  products!: Products[];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchProducts().subscribe((res) => {
      this.products = res.filter(
        (item) =>
          item.category == this.route.snapshot.paramMap.get('category-key')
      );
    });
  }

  fetchProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(
      '../../assets/server/products/index.get.json'
    );
  }
}
