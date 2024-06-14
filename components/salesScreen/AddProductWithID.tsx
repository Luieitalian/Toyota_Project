import React, {useContext, useState} from 'react';
import {useTheme} from 'react-native-paper';
import useAddProductWithIDStyle from './styles/useAddProductWithIDStyle';
import CustomButton from '../common/CustomButton';
import ItemIDInput from './ItemIDInput';
import {ProductModel} from '@/models/ProductModel';
import {ProductsContext} from '@/contexts/ProductsContext/ProductsContext';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';

const AddProductWithID = () => {
  const [IDText, setIDText] = useState<string>('');

  const {t} = useTranslation();
  const theme = useTheme();

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
        onSubmitEditing={onSubmitEditing}
        setIDText={setIDText}
        text={IDText}
      />
      <CustomButton overridingButtonStyles={styles} onPress={onSubmitEditing}>
        {t('add_product_with_id')}
      </CustomButton>
    </>
  );
};

export default AddProductWithID;
