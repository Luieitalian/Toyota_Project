import {createContext, Dispatch, SetStateAction} from 'react';
import {CartProductModel} from '../models/CartProductModel';

export const ShoppingCartContext = createContext({
  addToCart: (prod: CartProductModel) => {},
  removeFromCart: (prod_id: string) => {},
  removeOne: (prod_id: string) => {},
  clearCart: () => {},
  selectedOfferID: undefined,
  setSelectedOfferID: (offer_id: string | undefined) => {},
  cart: [] as CartProductModel[],
});
