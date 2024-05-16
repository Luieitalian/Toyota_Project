import {createContext} from 'react';
import {CartProductModel} from '../models/CartProductModel';

export const ShoppingCartContext = createContext({
  addToCart: (prod: CartProductModel) => {},
  removeFromCart: (prod_id: string) => {},
  addOne: (prod_id: string) => {},
  removeOne: (prod_id: string) => {},
  clearCart: () => {},
  cart: [] as CartProductModel[],
});
