import React, {memo, useState} from 'react';
import {useTheme} from 'react-native-paper';
import useScanBarcodeStyle from './styles/useScanBarcodeStyle';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import useNFC from '@/hooks/useNFC';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import BarcodeCamera from './BarcodeCamera';
import CustomModal from '../common/CustomModal';

const ScanBarcode = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {styles} = useScanBarcodeStyle(theme);
  const readNFC = useNFC();

  const onPress = async () => {
    onModal();
  };

  const onDismissModal = () => {
    setModalVisible(false);
  };

  const onModal = () => {
    setModalVisible(true);
  };

  const closeCamera = () => {
    setModalVisible(false);
  };

  return (
    <>
      <CustomButton onPress={onPress} overridingButtonStyles={styles}>
        {t('scan_barcode')}
      </CustomButton>
      <CustomModal
        overridingModalStyles={styles}
        modalVisible={modalVisible}
        onDismissModal={onDismissModal}
      >
        <BarcodeCamera closeCamera={closeCamera} />
      </CustomModal>
    </>
  );
};

export default memo(ScanBarcode);
