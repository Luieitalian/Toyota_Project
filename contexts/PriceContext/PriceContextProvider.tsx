import React, {memo, useContext, useMemo} from 'react';
import {PriceContext} from './PriceContext';
import useCartPricing from '@/hooks/useCartPricing';
import {ShoppingCartContext} from '../ShoppingCartContext/ShoppingCartContext';

export type PriceContextProviderProps = {
  children: React.ReactNode;
};

const PriceContextProvider = ({children}: PriceContextProviderProps) => {
  const {cart} = useContext(ShoppingCartContext);

  const {
    paymentTotal,
    discountTotal,
    subTotal,
    taxTotal,
    applyPayment,
    remainingPrice,
  } = useCartPricing(cart);

  const priceContext = useMemo(
    () => ({
      paymentTotal: paymentTotal,
      discountTotal: discountTotal,
      subTotal: subTotal,
      taxTotal: taxTotal,
      remainingPrice: remainingPrice,
      applyPayment: applyPayment,
    }),
    [
      paymentTotal,
      discountTotal,
      subTotal,
      taxTotal,
      remainingPrice,
      applyPayment,
    ]
  );

  if (!priceContext) {
    return <>{children}</>;
  }

  return (
    <PriceContext.Provider value={priceContext}>
      {children}
    </PriceContext.Provider>
  );
};

export default memo(PriceContextProvider);
