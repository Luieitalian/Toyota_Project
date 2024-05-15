import {TFunction} from 'i18next';
import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useReceiptMailStyle from './styles/useReceiptMailStyle';

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
    <Pressable
      android_ripple={{
        color: theme.colors.onSecondary,
        foreground: true,
      }}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{t('receipt_mail')}</Text>
    </Pressable>
  );
};

export default memo(ReceiptMail);
