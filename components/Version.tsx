import React, {memo} from 'react';
import {Text, View} from 'react-native';
import useVersionStyle from './styles/useVersionStyle';
import useServiceInfo from '../hooks/useServiceInfo';
import {TFunction} from 'i18next';
import {MD3Theme} from 'react-native-paper';

type VersionProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const Version = ({t, theme}: VersionProps) => {
  const {styles} = useVersionStyle(theme);
  const {serviceInfo, serviceLoading} = useServiceInfo(false);

  return (
    <View style={styles.versionView}>
      {serviceLoading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <Text
          style={styles.version}
        >{`${t('version')} ${JSON.parse(serviceInfo).version}`}</Text>
      )}
    </View>
  );
};

export default memo(Version);
