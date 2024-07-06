import React, {memo, useContext, useState} from 'react';
import {Button, Dialog, Portal, useTheme} from 'react-native-paper';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useGoToPaymentScreenStyle from './styles/useGoToPaymentScreenStyle';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import {Text} from 'react-native';
import {vibrate} from '@/utils/vibration';

const GoToPaymentScreen = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const {styles} = useGoToPaymentScreenStyle(theme);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {cart} = useContext(ShoppingCartContext);

  const onPress = () => {
    console.log('Go to payment screen');
    if (cart.length > 0) {
      navigation.navigate('PaymentScreen');
    } else {
      onDialog();
      vibrate(1);
    }
  };

  const onDialog = () => {
    setDialogVisible(true);
  };

  const onDismissDialog = () => {
    setDialogVisible(false);
  };

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('go_to_payment_screen')}
      </CustomButton>
      <Portal>
        <Dialog onDismiss={onDismissDialog} visible={dialogVisible}>
          <Dialog.Title>
            <Text style={styles.dialogText}>
              {t('there_is_no_items_in_cart')}
            </Text>
          </Dialog.Title>
          <Dialog.Actions>
            <Button onPress={onDismissDialog}>{t('OK')}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};

export default memo(GoToPaymentScreen);
