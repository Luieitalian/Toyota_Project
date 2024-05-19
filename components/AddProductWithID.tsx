import {TFunction} from 'i18next';
import React, {useContext, useState} from 'react';
import {MD3Theme} from 'react-native-paper';
import useAddProductWithIDStyle from './styles/useAddProductWithIDStyle';
import CustomButton from './CustomButton';
import ItemIDInput from './ItemIDInput';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import useProducts from '../hooks/useProducts';
import {ProductModel} from '../models/ProductModel';
import {CartProductModel} from '../models/CartProductModel';
import {ProductsContext} from '../contexts/ProductsContext';

type AddProductWithIDProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const AddProductWithID = ({t, theme}: AddProductWithIDProps) => {
  const [IDText, setIDText] = useState<string>('');

  const {styles} = useAddProductWithIDStyle(theme);

  const {cart, addToCart} = useContext(ShoppingCartContext);
  const {products, loadingProducts} = useContext(ProductsContext);

  const onSubmitEditing = () => {
    const desired_prod = products.filter(
      (prod: ProductModel) => prod.id === IDText
    )[0];

    if (desired_prod !== undefined) {
      addToCart({prod: desired_prod, _cart_amount: 1});
    } else {
      console.log(
        `There were no products with the id '${IDText}' to be added to the cart.`
      );
    }
  };

  return (
    <>
      <ItemIDInput
        disabled={loadingProducts}
        onSubmitEditing={onSubmitEditing}
        setIDText={setIDText}
        text={IDText}
        t={t}
        theme={theme}
      />
      <CustomButton
        disabled={loadingProducts}
        theme={theme}
        styles={styles}
        onPress={onSubmitEditing}
      >
        {t('add_product_with_id')}
      </CustomButton>
    </>
  );
};

export default AddProductWithID;
