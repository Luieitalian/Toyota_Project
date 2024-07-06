import React, {memo, useState} from 'react';
import {Button, Dialog, Portal, TextInput, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import usePrinterTestStyle from './styles/usePrinterTestStyle';
import usePDF from '@/hooks/usePDF';
import CustomButton from '@/components/common/CustomButton';
import CustomModal from '../common/CustomModal';
import Pdf from 'react-native-pdf';
import {PDF_PATH} from '@env';
import {Text} from 'react-native';

const PrinterTest = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePrinterTestStyle(theme);

  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [arbitraryText, setArbitraryText] = useState<string>('test');

  const {writeToPDF} = usePDF();

  const onPress = async () => {
    onDialog();
  };

  const onModal = () => {
    setModalVisible(true);
  };

  const onDismissModal = () => {
    setModalVisible(false);
  };

  const onDialog = () => {
    setDialogVisible(true);
  };

  const onDismissDialog = (choice: string) => {
    if (choice === 'ok') {
      onSubmitArbitraryText();
    }
    setDialogVisible(false);
  };

  const onChangeArbitraryText = (text: string) => {
    setArbitraryText(text);
  };

  const onSubmitArbitraryText = async () => {
    await writeToPDF(arbitraryText, 'testing_printer');
    onModal();
  };

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('printer_test')}
      </CustomButton>
      <Portal>
        <Dialog
          onDismiss={() => onDismissDialog('cancel')}
          visible={dialogVisible}
        >
          <Dialog.Title>
            <Text style={styles.dialogTitle}>
              {t('please_enter_an_arbitrary_text')}
            </Text>
          </Dialog.Title>
          <Dialog.Content>
            <TextInput
              mode="outlined"
              autoCorrect={false}
              inputMode="text"
              value={arbitraryText}
              onChangeText={onChangeArbitraryText}
              onSubmitEditing={() => onDismissDialog('ok')}
              style={styles.textInput}
              outlineStyle={styles.textInputOutline}
              activeOutlineColor={styles.textInputActiveOutline.color}
              textColor={styles.textInputText.color}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => onDismissDialog('cancel')}>
              {t('CANCEL')}
            </Button>
            <Button onPress={() => onDismissDialog('ok')}>{t('OK')}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <CustomModal
        modalVisible={modalVisible}
        onDismissModal={onDismissModal}
        overridingModalStyles={styles}
      >
        <Pdf
          source={{
            uri: `${PDF_PATH}testing_printer.pdf`,
          }}
          style={styles.pdf}
          scale={styles.pdfScale.width}
        />
      </CustomModal>
    </>
  );
};

export default memo(PrinterTest);
