import {createContext} from 'react';
import {CartProductModel} from '../models/CartProductModel';

export const ShoppingCartContext = createContext({
  addToCart: (prod: CartProductModel) => {},
  removeFromCart: (prod_id: number) => {},
  addOne: (prod_id: number) => {},
  removeOne: (prod_id: number) => {},
  cart: [] as CartProductModel[],
});
