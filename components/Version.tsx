import React, {memo} from 'react';
import {Text, View} from 'react-native';
import useVersionStyle from './styles/useVersionStyle';
import useServiceInfo from '../hooks/useServiceInfo';
import {useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

const Version = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useVersionStyle(theme);
  const {serviceInfo, serviceLoading} = useServiceInfo();

  return (
    <View style={styles.versionView}>
      {serviceLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <Text
          style={styles.version}
        >{`${t('version')} ${serviceInfo?.version}`}</Text>
      )}
    </View>
  );
};

export default memo(Version);
