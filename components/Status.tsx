import React, {memo, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {Surface, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useStatusStyle from './styles/useStatusStyle';
import {ServiceContext} from '../contexts/ServiceContext/ServiceContext';

const Status = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {service} = useContext(ServiceContext);

  const {styles} = useStatusStyle(theme);

  return (
    <Surface elevation={2} style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.text}>{`${t('shop_no')}: 2`}</Text>
        <Text style={styles.text}>{`${t('cash_register_no')}: 5`}</Text>
        <Text
          style={styles.text}
        >{`${t('version')}: ${service?.version}`}</Text>
      </View>
    </Surface>
  );
};

export default memo(Status);
