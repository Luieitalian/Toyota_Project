import React, {memo, useMemo, useState} from 'react';
import {ShoppingCartContext} from './ShoppingCartContext';
import {CartProductModel} from '../../models/CartProductModel';
import useShoppingCartFunctions from '../../hooks/useShoppingCartFunctions';

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<CartProductModel[]>([]);
  const [isCash, setIsCash] = useState<boolean>(true);
  const [selectedOfferID, setSelectedOfferID] = useState<string>();

  const {addToCart, removeFromCart, removeOne, clearCart} =
    useShoppingCartFunctions(setShoppingCart);

  const shoppingCartContext = useMemo(
    () => ({
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      removeOne: removeOne,
      clearCart: clearCart,
      selectedOfferID: selectedOfferID,
      setSelectedOfferID: setSelectedOfferID,
      cart: shoppingCart,
      isCash: isCash,
      setIsCash: setIsCash,
    }),
    [shoppingCart, isCash, selectedOfferID]
  );

  if (!shoppingCartContext) {
    throw new Error('shopping cart context does not exist.');
  }

  return (
    <ShoppingCartContext.Provider value={shoppingCartContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default memo(ShoppingCartContextProvider);
