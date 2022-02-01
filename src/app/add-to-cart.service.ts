import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Products } from './home/home.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  products = new BehaviorSubject<Products[]>([]);

  constructor() {}
}
