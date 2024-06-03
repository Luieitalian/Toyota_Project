import {createContext, Dispatch} from 'react';
import {CartProductModel} from '../../models/CartProductModel';

interface ShoppingCartContextType {
  addToCart: (prod: CartProductModel) => void;
  removeFromCart: (prod_id: string) => void;
  removeOne: (prod_id: string) => void;
  clearCart: () => void;
  selectedOfferID: string | undefined;
  setSelectedOfferID: Dispatch<React.SetStateAction<string | undefined>>;
  cart: CartProductModel[];
  isCash: boolean;
  setIsCash: (val: boolean) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);
