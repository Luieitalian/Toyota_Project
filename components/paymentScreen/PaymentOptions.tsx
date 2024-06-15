import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import usePaymentOptionsStyle from './styles/usePaymentOptionsStyle';

const PaymentOptions = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePaymentOptionsStyle(theme);

  return (
    <View style={styles.container}>
      <Text>PaymentOptions</Text>
    </View>
  );
};

export default memo(PaymentOptions);
