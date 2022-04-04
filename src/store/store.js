import { createStore } from 'redux';
import { cart } from '../reducers/cart.reducer';

export var itemStore = createStore(cart);
