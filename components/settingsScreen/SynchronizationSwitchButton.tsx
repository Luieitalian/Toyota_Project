import React, {memo, useContext, useState} from 'react';
import {Switch, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useSynchronizationSwitchButtonStyle from './styles/useSynchronizationSwitchButtonStyle';
import {Text, View} from 'react-native';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';

const SynchronizationSwitchButton = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useSynchronizationSwitchButtonStyle(theme);

  const {isSyncAutomatic, toggleSyncAutomatic} = useContext(StatusContext);

  const onToggleSwitch = () => {
    toggleSyncAutomatic();
  };

  return (
    <View style={styles.switchView}>
      <Text style={styles.text}>{t('auto_synchronize_unsent_receipts')}</Text>
      <Switch
        style={styles.switch}
        value={isSyncAutomatic}
        onValueChange={onToggleSwitch}
      />
    </View>
  );
};

export default memo(SynchronizationSwitchButton);
