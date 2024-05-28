import React, {memo, useContext, useEffect, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {ScrollView, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';
import useReceiptStyle from './styles/useReceiptStyle';
import {CartProductModel} from '../models/CartProductModel';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import useCartPricing from '../hooks/useCartPricing';
import currency from 'currency.js';

const receipt = require('receipt');

receipt.config.currency = '₺';
receipt.config.ruler = '-';

const Receipt = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {cart, isCash, selectedOfferID} = useContext(ShoppingCartContext);
  const {subTotal, paymentTotal, discountTotal} = useCartPricing(cart);

  const {width} = useWindowDimensions();

  const {baseStyle} = useReceiptStyle(theme);

  const productLines = cart.map((cart_item: CartProductModel, idx: number) => {
    return {
      item: cart_item.prod.name,
      qty: cart_item._cart_amount,
      cost: currency(cart_item.prod.price).value,
    };
  });

  const output = useMemo(
    () =>
      receipt.create([
        {type: 'empty'},
        {type: 'empty'},
        {
          type: 'text',
          value: ['HızlıPOS', 'hizlipos@magaza.com', 'www.hizlipos.com'],
          align: 'center',
        },
        {type: 'empty'},
        {type: 'empty'},
        {
          type: 'properties',
          lines: [
            {name: 'Order Number', value: '1004850027'},
            {name: 'Date', value: '28/05/2024 13:20'},
          ],
        },
        {type: 'empty'},
        {type: 'empty'},
        {
          type: 'table',
          lines: productLines,
        },
        {type: 'empty'},
        {type: 'empty'},
        {
          type: 'text',
          align: 'center',
          value: `${isCash ? 'Cash' : 'Credit Card'} is selected.`,
        },
        {type: 'empty'},
        {type: 'empty'},
        {
          type: 'properties',
          lines: [
            {name: 'Subtotal', value: currency(subTotal).value},
            {name: 'Discount', value: currency(discountTotal).value},
            {name: 'Payment Total', value: currency(paymentTotal).value},
          ],
        },
        {type: 'empty'},
        {type: 'empty'},
        {
          type: 'text',
          value: 'Thank you for shopping, have a great day!',
        },
      ]),
    [productLines]
  );

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HTML
        baseStyle={baseStyle}
        source={{html: `<pre>${output}</pre>`}}
        contentWidth={width}
      />
    </ScrollView>
  );
};

export default memo(Receipt);
