import {TFunction} from 'i18next';
import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Dialog, MD3Theme, Modal, Portal, TextInput} from 'react-native-paper';
import useLookUpPriceStyle from './styles/useLookUpPriceStyle';
import CustomButton from './CustomButton';
import Product from './Product';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext';
import {ProductsContext} from '../contexts/ProductsContext';
import {ProductModel} from '../models/ProductModel';

type LookUpPriceProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const LookUpPrice = ({t, theme}: LookUpPriceProps) => {
  const {styles} = useLookUpPriceStyle(theme);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [IDText, setIDText] = useState<string | undefined>(undefined);
  const [productShown, setProductShown] = useState<ProductModel | undefined>(
    undefined
  );

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
    setIDText(text);
  };

  const onSubmitEditing = () => {
    const product = products.filter(
      (prod: ProductModel) => prod.id === IDText
    )[0];
    setProductShown(product);
    if (product !== undefined) {
    }
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
            onSubmitEditing={onSubmitEditing}
            style={styles.textInput}
            placeholder={t('press_enter_id')}
            value={IDText}
            onChangeText={onChangeText}
          />
          {productShown !== undefined && modalVisible ? (
            <Product
              prod={productShown}
              addToCart={addToCart}
              t={t}
              theme={theme}
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
      <CustomButton theme={theme} styles={styles} onPress={showModal}>
        {t('look_up_price')}
      </CustomButton>
    </>
  );
};

export default memo(LookUpPrice);
