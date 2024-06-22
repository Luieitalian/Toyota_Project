import {UnsentSalesContext} from '@/contexts/UnsentSalesContext/UnsentSalesContext';
import React, {memo, useContext} from 'react';
import {Text, View} from 'react-native';
import {Icon, IconButton, useTheme} from 'react-native-paper';
import useSynchronizeAllStyle from './styles/useSynchronizeAllStyle';
import {useTranslation} from 'react-i18next';
import {PastSalesContext} from '@/contexts/PastSalesContext/PastSalesContext';

const SynchronizeAll = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {clearUnsentSales} = useContext(UnsentSalesContext);
  const {markAllSynchronized} = useContext(PastSalesContext);

  const {styles} = useSynchronizeAllStyle(theme);

  const onPress = () => {
    console.log('clearing unsent sales!');
    clearUnsentSales();
    markAllSynchronized();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('synchronize_all')}</Text>
      <IconButton size={32} icon="arrow-up-box" onPress={onPress} />
    </View>
  );
};

export default memo(SynchronizeAll);
