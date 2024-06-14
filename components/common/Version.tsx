import React, {memo, useContext} from 'react';
import {Text, View} from 'react-native';
import useVersionStyle from './styles/useVersionStyle';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {ServiceContext} from '../../contexts/ServiceContext/ServiceContext';

const Version = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useVersionStyle(theme);
  const {service} = useContext(ServiceContext);

  return (
    <View style={styles.versionView}>
      <Text
        style={styles.version}
      >{`${t('version')} ${service?.version}`}</Text>
    </View>
  );
};

export default memo(Version);
