import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { Banners, Categories, Products } from './home.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banners!: Banners[];
  categories!: Categories[];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    forkJoin([this.fetchBanners(), this.fetchCategories()]).subscribe(
      (response) => {
        console.log(response);

        this.banners = response[0].sort((item) => item.order);
        this.categories = response[1].sort((item) => item.order);
      }
    );
  }

  fetchBanners(): Observable<Banners[]> {
    return this.http.get<Banners[]>(
      '../../assets/server/banners/index.get.json'
    );
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
