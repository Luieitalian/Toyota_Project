import React, {memo, useContext, useMemo, useRef, useState} from 'react';
import {Modal, Portal, useTheme} from 'react-native-paper';
import useCreditCardSelectStyle from './styles/useCreditCardSelectStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext/ShoppingCartContext';
import {Image, KeyboardAvoidingView, TextInput, View} from 'react-native';
import CreditCardNumberInput from './CreditCardNumberInput';
import CreditCardNameInput from './CreditCardNameInput';
import CreditCardDateInput from './CreditCardDateInput';
import CreditCardCVVInput from './CreditCardCVVInput';
import CancelDoneButtonGroup from './CancelDoneButtonGroup';

const CreditCardSelect = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  const creditCardCVVInputRef = useRef<TextInput>(null);
  const creditCardNameInputRef = useRef<TextInput>(null);
  const creditCardDateInputRef = useRef<TextInput>(null);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [creditCardNumber, setCreditCardNumber] = useState<
    string | undefined
  >();
  const [creditCardLogo, setCreditCardLogo] = useState<string | undefined>();

  const {isCash, setIsCash} = useContext(ShoppingCartContext);

  const {styles} = useCreditCardSelectStyle({theme, isCash});

  const hideModal = () => {
    setModalVisible(false);
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const onModalDismiss = () => {
    hideModal();
    resetCardData();
  };

  const checkAndSetCreditCardLogo = () => {
    if (creditCardNumber?.startsWith('4')) {
      setCreditCardLogo('visa');
    } else if (creditCardNumber?.startsWith('3')) {
      setCreditCardLogo('american_express');
    } else if (creditCardNumber?.startsWith('5')) {
      setCreditCardLogo('mastercard');
    } else {
      setCreditCardLogo(undefined);
    }
  };

  const onChangeNumber = (masked: string, unmasked: string) => {
    setCreditCardNumber(masked);
    checkAndSetCreditCardLogo();
  };

  const logo = useMemo(() => {
    if (creditCardLogo === 'mastercard') {
      return require('../assets/credit_card_logos/mastercard.png');
    } else if (creditCardLogo === 'visa') {
      return require('../assets/credit_card_logos/visa.png');
    } else if (creditCardLogo === 'american_express') {
      return require('../assets/credit_card_logos/american_express.png');
    } else {
      return null;
    }
  }, [creditCardLogo]);

  const onPress = () => {
    console.log('Credit card Select');
    setIsCash(false);
    showModal();
  };

  const focusOnNameInput = () => {
    creditCardNameInputRef.current?.focus();
  };
  const focusOnDateInput = () => {
    creditCardDateInputRef.current?.focus();
  };
  const focusOnCVVInput = () => {
    creditCardCVVInputRef.current?.focus();
  };

  const resetCardData = () => {
    setCreditCardNumber(undefined);
    setCreditCardLogo(undefined);
  };

  const onCancel = () => {
    onModalDismiss();
  };

  const onDone = () => {
    console.log('Received credit card info!');
    onModalDismiss();
  };

  return (
    <>
      <CustomButton styles={styles} onPress={onPress}>
        {t('credit_card_select')}
      </CustomButton>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={onModalDismiss}
          contentContainerStyle={styles.modal}
        >
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.contentContainer}
          >
            <View style={styles.flexCol}>
              <CreditCardNumberInput
                creditCardNumber={creditCardNumber}
                onChangeNumber={onChangeNumber}
                focusOnNameInput={focusOnNameInput}
              />
              <CreditCardNameInput
                focusOnDateInput={focusOnDateInput}
                creditCardNameInputRef={creditCardNameInputRef}
              />
              <View style={styles.dateCVVGroup}>
                <CreditCardDateInput
                  focusOnCVVInput={focusOnCVVInput}
                  creditCardDateInputRef={creditCardDateInputRef}
                />
                <CreditCardCVVInput
                  creditCardCVVInputRef={creditCardCVVInputRef}
                />
              </View>
              {logo && <Image style={styles.logo} source={logo} />}
            </View>
          </KeyboardAvoidingView>
          <CancelDoneButtonGroup onCancel={onCancel} onDone={onDone} />
        </Modal>
      </Portal>
    </>
  );
};

export default memo(CreditCardSelect);
