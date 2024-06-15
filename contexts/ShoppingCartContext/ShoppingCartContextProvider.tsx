import React, {memo, useMemo, useState} from 'react';
import {ShoppingCartContext} from './ShoppingCartContext';
import {CartProductModel} from '@/models/CartProductModel';
import useShoppingCartFunctions from '@/hooks/useShoppingCartFunctions';

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartContextProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<CartProductModel[]>([]);
  const [isCash, setIsCash] = useState<boolean>(true);

  const {addToCart, removeFromCart, removeOne, clearCart} =
    useShoppingCartFunctions(setShoppingCart);

  const shoppingCartContext = useMemo(
    () => ({
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      removeOne: removeOne,
      clearCart: clearCart,
      cart: shoppingCart,
      isCash: isCash,
      setIsCash: setIsCash,
    }),
    [shoppingCart, isCash]
  );

  if (!shoppingCartContext) {
    return <>{children}</>;
  }

  return (
    <ShoppingCartContext.Provider value={shoppingCartContext}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default memo(ShoppingCartContextProvider);
