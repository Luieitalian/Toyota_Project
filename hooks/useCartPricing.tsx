import {useCallback, useContext, useMemo} from 'react';
import {CartProductModel} from '@/models/CartProductModel';
import {SpecialOfferModel} from '@/models/SpecialOfferModel';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import {currency_format_wo_symbol, taxRate} from '@/globals/pricing';
import currency from 'currency.js';
/**
 * Creates an instance of User.
 * @param {string} cart - The name of the user.
 */
const useCartPricing = (cart: CartProductModel[]) => {
  const {specialOffers, selectedSpecialOffer} =
    useContext(SpecialOffersContext);

  const selected_offer = useMemo(
    () =>
      specialOffers?.find(
        (offer: SpecialOfferModel) => offer === selectedSpecialOffer
      ),
    [specialOffers, selectedSpecialOffer]
  );

  const buy_n_pay_m = useCallback(
    (selected_offer: SpecialOfferModel, num: number): number => {
      let total = 0;
      let applicableCartItems = cart;

      if (!selected_offer.applicable_products.all) {
        applicableCartItems = cart.filter((item: CartProductModel) =>
          selected_offer.applicable_products.products?.includes(item.prod.id)
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
    [selected_offer, cart]
  );

  const n_discount_over_m = useCallback(
    (selected_offer: SpecialOfferModel, n: number, m: number): number => {
      return n;
    },
    [selected_offer, cart]
  );

  const discountTotal = useMemo((): number => {
    if (!selected_offer) return 0;

    switch (selected_offer.name) {
      case 'buy_two_pay_one':
        return buy_n_pay_m(selected_offer, 2);
      case 'buy_three_pay_one':
        return buy_n_pay_m(selected_offer, 3);
      case '100_discount_over_1000':
        return n_discount_over_m(selected_offer, 100, 1000);
      case '100_discount_over_500':
        return n_discount_over_m(selected_offer, 100, 500);
    }
    return 0;
  }, [selected_offer, cart]);

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

  //
  const taxTotal = useMemo(
    () => currency(subTotal).multiply(taxRate).divide(100).value,
    [subTotal, taxRate]
  );

  const paymentTotal = useMemo(
    () => currency(subTotal).add(taxTotal).subtract(discountTotal).value,
    [subTotal, discountTotal, taxTotal]
  );

  return {subTotal, paymentTotal, discountTotal, taxTotal};
};

export default useCartPricing;
