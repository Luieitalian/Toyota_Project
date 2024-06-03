import React, {memo, useContext, useState} from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {Modal, Portal, TextInput, useTheme} from 'react-native-paper';
import useLookUpPriceStyle from './styles/useLookUpPriceStyle';
import CustomButton from './CustomButton';
import Product from './Product';
import {ProductsContext} from '../contexts/ProductsContext';
import {ProductModel} from '../models/ProductModel';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext/ShoppingCartContext';
import {FavoritesContext} from '../contexts/FavoritesContext/FavoritesContext';

const LookUpPrice = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useLookUpPriceStyle(theme);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [IDText, setIDText] = useState<string | undefined>(undefined);
  const [productShown, setProductShown] = useState<ProductModel | undefined>(
    undefined
  );

  const {addToFavorites, isFavorite, removeFromFavorites} =
    useContext(FavoritesContext);
  const {addToCart} = useContext(ShoppingCartContext);
  const {products} = useContext(ProductsContext);

  const onPress = () => {};

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onChangeText = (text: string) => {
    setIDText((oldText) => {
      console.log('idtext submit:', text);
      const product = products.filter(
        (prod: ProductModel) => prod.id === text
      )[0];
      setProductShown(product);
      return text;
    });
  };

  const onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => {
    onChangeText(event.nativeEvent.text);
  };

  return (
    <>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <TextInput
            inputMode="numeric"
            style={styles.textInput}
            placeholder={t('press_enter_id')}
            value={IDText}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          {productShown !== undefined && modalVisible ? (
            <Product
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={isFavorite(productShown)}
              prod={productShown}
              addToCart={addToCart}
            />
          ) : (
            <View>
              <Text style={styles.warningMessage}>
                {t('please_enter_a_valid_id')}
              </Text>
            </View>
          )}
        </Modal>
      </Portal>
      <CustomButton styles={styles} onPress={showModal}>
        {t('look_up_price')}
      </CustomButton>
    </>
  );
};

export default memo(LookUpPrice);
