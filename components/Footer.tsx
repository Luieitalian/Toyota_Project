import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import useFooterStyle from './styles/useFooterStyle';
import {TFunction} from 'i18next';
import {Button, Icon, MD3Theme, Menu} from 'react-native-paper';
import {StatusContext} from '../contexts/StatusContext';

type FooterProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const Footer = ({t, theme}: FooterProps) => {
  const {isOnline, toggleOnlineStatus} = useContext(StatusContext);

  const {styles} = useFooterStyle({theme, isOnline});

  const onPress = () => {
    toggleOnlineStatus();
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.menuContainer}>
        <Button
          style={styles.button}
          onPress={onPress}
          compact
          mode="contained"
        >
          {t('debug_toggle_online_status')}
        </Button>
      </View>
      <View style={styles.shopStatusContainer}>
        <Text style={styles.text}>
          {t('shop_is_online', {status: isOnline ? t('online') : t('offline')})}
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
