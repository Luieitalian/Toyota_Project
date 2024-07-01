import React, {memo, useCallback, useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import usePaymentInteractionsStyle from './styles/usePaymentInteractionsStyle';
import {useTranslation} from 'react-i18next';
import {
  ActivityIndicator,
  Button,
  Dialog,
  Portal,
  useTheme,
} from 'react-native-paper';
import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import useCartPricing from '@/hooks/useCartPricing';
import RemainingPrice from './RemainingPrice';
import DiscountAndOffer from './DiscountAndOffer';
import EnterPaymentAmount from './EnterPaymentAmount';
import PayWithCash from './PayWithCash';
import PayWithCreditCard from './PayWithCreditCard';
import {SpecialOffersContext} from '@/contexts/SpecialOffersContext/SpecialOffersContext';
import CustomModal from '@/components/common/CustomModal';
import CancelDoneButtonGroup from '@/components/common/CancelDoneButtonGroup';
import currency from 'currency.js';
import CancelDocument from './CancelDocument';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {vibrate} from '@/utils/vibration';

const PaymentInteractions = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {styles} = usePaymentInteractionsStyle(theme);

  const [remainingPrice, setRemainingPrice] = useState<number>(0);
  const [paymentAmountMasked, setPaymentAmountMasked] = useState<string>();
  const [paymentAmountUnMasked, setPaymentAmountUnMasked] = useState<number>();
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState<string>();
  const [modalContent, setModalContent] = useState<string>();

  const [isWaitingModalVisible, setIsWaitingModalVisible] =
    useState<boolean>(false);

  const {cart, clearCart} = useContext(ShoppingCartContext);
  const {selectedSpecialOffer} = useContext(SpecialOffersContext);

  const {paymentTotal} = useCartPricing(cart);

  const onSubmitAmount = (isCash: boolean) => {
    if (
      paymentAmountMasked === undefined ||
      paymentAmountUnMasked === undefined
    ) {
      onDialog('please_enter_a_valid_amount');
      vibrate(1);
      return;
    }
    if (paymentAmountUnMasked > remainingPrice) {
      onDialog('please_enter_an_amount_less_than_or_equal_to_remaining_price');
      vibrate(1);
      return;
    }
    onWaitingModal(isCash);
  };

  const onChangeAmountMasked = (text: string) => {
    setPaymentAmountMasked(text);
  };

  const onChangeAmountUnMasked = (amount: number) => {
    setPaymentAmountUnMasked(amount);
  };

  const onDialog = (text: string) => {
    setDialogContent(t(text));
    setDialogVisible(true);
  };

  const onDismissDialog = (choice: string) => {
    if (dialogContent === t('are_you_sure_to_cancel_document')) {
      if (choice === 'ok') {
        resetScreen();
      }
    }
    setDialogVisible(false);
  };

  const onWaitingModal = (isCash: boolean) => {
    if (isCash) {
      setModalContent(t('please_insert_cash'));
    } else {
      setModalContent(t('please_scan_a_credit_card'));
    }
    setIsWaitingModalVisible(true);
  };

  const onDismissWaitingModal = () => {
    setIsWaitingModalVisible(false);
  };

  const onCancel = () => {
    onDismissWaitingModal();
  };

  const onDone = () => {
    applyPayment(paymentAmountUnMasked!);

    onDismissWaitingModal();
  };

  const onCancelDocument = () => {
    onDialog('are_you_sure_to_cancel_document');
  };

  const resetScreen = () => {
    clearCart();
    navigation.navigate('SalesScreen');
  };

  const applyPayment = useCallback(
    (amount: number) => {
      setRemainingPrice((p) => currency(p).subtract(amount).value);
    },
    [setRemainingPrice]
  );

  // initially set the remaining price to paymentTotal from useCartPricing hook.
  useEffect(() => {
    setRemainingPrice(paymentTotal);
  }, []);

  // set remaining price according to selected special offer, offer discount is applied in useCartPricing hook.
  useEffect(() => {
    setRemainingPrice(paymentTotal);
  }, [selectedSpecialOffer]);

  return (
    <>
      <View style={styles.container}>
        <RemainingPrice remainingPrice={remainingPrice} />
        {selectedSpecialOffer ? <DiscountAndOffer /> : null}
        <EnterPaymentAmount
          onChangeAmountMasked={onChangeAmountMasked}
          onChangeAmountUnMasked={onChangeAmountUnMasked}
          paymentAmountMasked={paymentAmountMasked}
        />
        <View style={styles.interactionGroup}>
          <PayWithCash onSubmitAmount={onSubmitAmount} />
          <PayWithCreditCard onSubmitAmount={onSubmitAmount} />
        </View>
        <CancelDocument onCancelDocument={onCancelDocument} />
      </View>

      <Portal>
        <Dialog
          onDismiss={() => onDismissDialog('cancel')}
          visible={dialogVisible}
        >
          <Dialog.Title>
            <Text style={styles.dialogText}>{dialogContent}</Text>
          </Dialog.Title>
          <Dialog.Actions>
            <Button onPress={() => onDismissDialog('cancel')}>
              {t('CANCEL')}
            </Button>
            <Button onPress={() => onDismissDialog('ok')}>{t('OK')}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <CustomModal
        modalVisible={isWaitingModalVisible}
        onDismissModal={onDismissWaitingModal}
        overridingModalStyles={styles}
      >
        <Text style={styles.receivingPaymentText}>{modalContent}</Text>
        <ActivityIndicator size="large" theme={theme} />
        <CancelDoneButtonGroup onCancel={onCancel} onDone={onDone} />
      </CustomModal>
    </>
  );
};

export default memo(PaymentInteractions);
