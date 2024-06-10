import React, {memo, useContext, useRef, useState} from 'react';
import {Button, Modal, Portal, useTheme} from 'react-native-paper';
import useCreditCardSelectStyle from './styles/useCreditCardSelectStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';
import {ShoppingCartContext} from '../contexts/ShoppingCartContext/ShoppingCartContext';
import {KeyboardAvoidingView, TextInput, View} from 'react-native';
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

  const {isCash, setIsCash} = useContext(ShoppingCartContext);

  const {styles} = useCreditCardSelectStyle({theme, isCash});

  const hideModal = () => {
    setModalVisible(false);
  };
  const showModal = () => {
    setModalVisible(true);
  };

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

  const onCancel = () => {
    hideModal();
  };
  const onDone = () => {
    console.log('Received your request!');
    hideModal();
  };

  return (
    <>
      <CustomButton styles={styles} onPress={onPress}>
        {t('credit_card_select')}
      </CustomButton>
      <Portal>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <KeyboardAvoidingView
            behavior="padding"
            style={styles.contentContainer}
          >
            <View style={styles.flexCol}>
              <CreditCardNumberInput focusOnNameInput={focusOnNameInput} />
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
            </View>
          </KeyboardAvoidingView>
          <CancelDoneButtonGroup onCancel={onCancel} onDone={onDone} />
        </Modal>
      </Portal>
    </>
  );
};

export default memo(CreditCardSelect);
