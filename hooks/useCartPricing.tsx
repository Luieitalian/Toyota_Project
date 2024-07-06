import {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {CartProductModel} from '@/models/CartProductModel';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import {currency_format_wo_symbol, taxRate} from '@/globals/pricing';
import currency from 'currency.js';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
/**
 * @param cart - The cart that gets processed.
 */
const useCartPricing = (cart: CartProductModel[]) => {
  const {selectedSpecialOffer} = useContext(SpecialOffersContext);
  const [remainingPrice, setRemainingPrice] = useState<number>(0);

  // initially set the remaining price to paymentTotal from useCartPricing hook.
  useEffect(() => {
    setRemainingPrice(paymentTotal);
  }, [cart, selectedSpecialOffer]);

  const applyPayment = useCallback(
    (amount: number) => {
      setRemainingPrice((p) => currency(p).subtract(amount).value);
    },
    [setRemainingPrice]
  );

  const buy_n_pay_m = useCallback(
    (selectedSpecialOffer: SpecialOfferModel, num: number): number => {
      let total = 0;
      let applicableCartItems = cart;

      if (!selectedSpecialOffer.applicable_products.all) {
        applicableCartItems = cart.filter((item: CartProductModel) =>
          selectedSpecialOffer.applicable_products.products?.includes(
            item.prod.id
          )
        );
      }

      applicableCartItems.forEach((item: CartProductModel) => {
        const whole = item._cart_amount - Math.floor(item._cart_amount / num);
        total += currency(item.prod.price, currency_format_wo_symbol).multiply(
          whole
        ).value;
      });

      return total;
    },
    [selectedSpecialOffer, cart]
  );

  const n_discount_over_m = useCallback(
    (selectedSpecialOffer: SpecialOfferModel, n: number, m: number): number => {
      return n;
    },
    [selectedSpecialOffer, cart]
  );

  const discountTotal = useMemo((): number => {
    if (!selectedSpecialOffer) return 0;

    switch (selectedSpecialOffer.name) {
      case 'buy_two_pay_one':
        return buy_n_pay_m(selectedSpecialOffer, 2);
      case 'buy_three_pay_one':
        return buy_n_pay_m(selectedSpecialOffer, 3);
      case '100_discount_over_1000':
        return n_discount_over_m(selectedSpecialOffer, 100, 1000);
      case '100_discount_over_500':
        return n_discount_over_m(selectedSpecialOffer, 100, 500);
    }
    return 0;
  }, [selectedSpecialOffer, cart]);

  /**
   * @returns {number[]} cart item prices by multiplying single price of the item and the quantity of the item in the cart.
   */
  const subTotalMap = useMemo(
    () =>
      cart.map(
        (cart_item: CartProductModel) =>
          currency(cart_item.prod.price, currency_format_wo_symbol).multiply(
            cart_item._cart_amount
          ).value
      ),
    [cart]
  );

  /**
   * returns the sum of subTotalMap to get the whole price of the cart
   */
  const subTotal = useMemo(
    () => subTotalMap.reduce((acc, curr) => acc + curr, 0),
    [cart, subTotalMap]
  );

  const taxTotal = useMemo(
    () => currency(subTotal).multiply(taxRate).divide(100).value,
    [subTotal, taxRate]
  );

  const paymentTotal = useMemo(
    () => currency(subTotal).add(taxTotal).subtract(discountTotal).value,
    [subTotal, discountTotal, taxTotal]
  );

  return {
    subTotal,
    paymentTotal,
    discountTotal,
    taxTotal,
    remainingPrice,
    applyPayment,
  };
};

export default useCartPricing;
