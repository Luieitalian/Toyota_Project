import React, {memo, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {Surface, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useStatusStyle from './styles/useStatusStyle';
import useServiceInfo from '../hooks/useServiceInfo';

const Status = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {serviceInfo, serviceLoading} = useServiceInfo();

  const {styles} = useStatusStyle(theme);

  return (
    <Surface elevation={2} style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.text}>{`${t('shop_no')}: 2`}</Text>
        <Text style={styles.text}>{`${t('cash_register_no')}: 5`}</Text>
        {serviceLoading ? (
          <Text>{t('loading')}</Text>
        ) : (
          <Text
            style={styles.text}
          >{`${t('version')}: ${serviceInfo?.version}`}</Text>
        )}
      </View>
    </Surface>
  );
};

export default memo(Status);
