import React, {memo, useState} from 'react';
import {View} from 'react-native';
import {
  Button,
  Modal,
  Portal,
  Snackbar,
  TextInput,
  useTheme,
} from 'react-native-paper';
import useReceiptMailStyle from './styles/useReceiptMailStyle';
import CustomButton from './CustomButton';
import {useTranslation} from 'react-i18next';

const ReceiptMail = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useReceiptMailStyle(theme);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [successSnackbarVisible, setSuccessSnackbarVisible] =
    useState<boolean>(false);
  const [failureSnackbarVisible, setFailureSnackbarVisible] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string | undefined>(undefined);

  const onPress = () => {
    showModal();
    console.log('Receipt mail');
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const hideSuccessSnackbar = () => {
    setSuccessSnackbarVisible(false);
  };

  const hideFailureSnackbar = () => {
    setFailureSnackbarVisible(false);
  };

  const onChangeText = (text: string) => {
    setEmail(text);
  };

  const onSubmitEditing = () => {
    if (email?.match(/\S+@\S+\.\S+/)) {
      setSuccessSnackbarVisible(true);
      setModalVisible(false);
    } else {
      setFailureSnackbarVisible(true);
    }
  };

  const onCancel = () => {
    setModalVisible(false);
  };

  const onDone = () => {
    onSubmitEditing();
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
            inputMode="email"
            style={styles.textInput}
            placeholder={t('please_enter_email')}
            value={email}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
          />
          <View style={styles.buttonGroup}>
            <Button
              onPress={onCancel}
              mode="elevated"
              style={styles.cancelButton}
              labelStyle={styles.cancelText}
            >
              {t('cancel')}
            </Button>
            <Button
              onPress={onDone}
              mode="elevated"
              style={styles.doneButton}
              labelStyle={styles.doneText}
            >
              {t('done')}
            </Button>
          </View>
        </Modal>
        <Snackbar
          duration={2000}
          onDismiss={hideSuccessSnackbar}
          visible={successSnackbarVisible}
        >
          {t('we_have_received_your_mail')}
        </Snackbar>
        <Snackbar
          duration={2000}
          onDismiss={hideFailureSnackbar}
          visible={failureSnackbarVisible}
        >
          {t('we_have_not_received_your_mail')}
        </Snackbar>
      </Portal>
      <CustomButton styles={styles} onPress={onPress}>
        {t('receipt_mail')}
      </CustomButton>
    </>
  );
};

export default memo(ReceiptMail);
