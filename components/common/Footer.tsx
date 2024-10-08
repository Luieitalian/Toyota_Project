import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import useFooterStyle from './styles/useFooterStyle';
import {Button, Icon, useTheme} from 'react-native-paper';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import {useTranslation} from 'react-i18next';
import {UsersContext} from '@/contexts/UsersContext/UsersContext';

const Footer = () => {
  const {isOnline, toggleOnlineStatus} = useContext(StatusContext);

  const [isButtonHiding, setIsButtonHiding] = useState<boolean>(false);

  const {user} = useContext(UsersContext);

  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useFooterStyle({theme, isOnline});

  const onPress = () => {
    toggleOnlineStatus();
  };

  const onLongPress = () => {
    setIsButtonHiding(true);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.menuContainer}>
        <Text style={styles.userText}>{`${t('cashier')}: ${user}`}</Text>
        {isButtonHiding ? (
          <></>
        ) : (
          <Button
            style={styles.button}
            onPress={onPress}
            onLongPress={onLongPress}
            compact
            mode="contained"
          >
            {t('debug_toggle_online_status')}
          </Button>
        )}
      </View>
      <View style={styles.shopStatusContainer}>
        <Text style={styles.text}>
          {t('shop_is_status', {status: isOnline ? t('online') : t('offline')})}
        </Text>
        <Icon
          color={styles.icon.color}
          size={styles.icon.width}
          source="circle"
        />
      </View>
    </View>
  );
};

export default Footer;
