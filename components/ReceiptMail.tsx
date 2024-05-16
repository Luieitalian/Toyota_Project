import {TFunction} from 'i18next';
import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useReceiptMailStyle from './styles/useReceiptMailStyle';
import CustomButton from './CustomButton';

type ReceiptMailProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const ReceiptMail = ({t, theme}: ReceiptMailProps) => {
  const {styles} = useReceiptMailStyle(theme);

  const onPress = () => {
    console.log('Receipt Mail');
  };

  return (
    <CustomButton theme={theme} styles={styles} onPress={onPress}>
      {t('receipt_mail')}
    </CustomButton>
  );
};

export default memo(ReceiptMail);
