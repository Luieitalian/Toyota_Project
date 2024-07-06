import React, {memo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import CustomButton from '../common/CustomButton';
import useShowSpecialOffersStyle from './styles/useShowSpecialOffersStyle';
import CustomModal from '../common/CustomModal';
import SpecialOffers from '../common/SpecialOffers';

const ShowSpecialOffers = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {styles} = useShowSpecialOffersStyle(theme);

  const onPress = () => {
    console.log('ShowSpecialOffers');
    onModal();
  };

  const onDismissModal = () => {
    setModalVisible(false);
  };

  const onModal = () => {
    setModalVisible(true);
  };

  const onCancel = () => {
    onDismissModal();
  };

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('show_special_offers')}
      </CustomButton>
      <CustomModal
        modalVisible={modalVisible}
        onDismissModal={onDismissModal}
        overridingModalStyles={styles}
      >
        <SpecialOffers onDone={onCancel} onCancel={onCancel} />
      </CustomModal>
    </>
  );
};

export default memo(ShowSpecialOffers);
