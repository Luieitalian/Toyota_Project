import {useCallback, useContext, useMemo} from 'react';
import {CartProductModel} from '../models/CartProductModel';
import currency from 'currency.js';

const useCartPricing = (cart: CartProductModel[]) => {
  const subTotalMap = useMemo(
    () =>
      cart.map(
        (cart_item: CartProductModel) =>
          currency(cart_item.prod.price, {
            separator: '.',
            decimal: ',',
          }).multiply(cart_item._cart_amount).value
      ),
    [cart]
  );

  const subTotal = useMemo(
    () => subTotalMap.reduce((acc, curr) => acc + curr, 0),
    [cart]
  );

  return {subTotal};
};

export default useCartPricing;
