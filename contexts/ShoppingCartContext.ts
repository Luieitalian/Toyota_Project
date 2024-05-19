import {createContext, Dispatch, SetStateAction} from 'react';
import {CartProductModel} from '../models/CartProductModel';

export const ShoppingCartContext = createContext({
  addToCart: (prod: CartProductModel) => {},
  removeFromCart: (prod_id: string) => {},
  addOne: (prod_id: string) => {},
  removeOne: (prod_id: string) => {},
  clearCart: () => {},
  selectedOffer: undefined,
  setSelectedOffer: (() => {}) as Dispatch<SetStateAction<string | undefined>>,
  cart: [] as CartProductModel[],
});
