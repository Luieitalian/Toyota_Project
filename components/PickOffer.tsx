import {TFunction} from 'i18next';
import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import usePickOfferStyle from './styles/usePickOfferStyle';

type PickOfferProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const PickOffer = ({t, theme}: PickOfferProps) => {
  const {styles} = usePickOfferStyle(theme);

  const onPress = () => {
    console.log('pick_offer');
  };

  return (
    <Pressable
      android_ripple={{
        color: theme.colors.onSecondary,
        foreground: true,
      }}
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.text}>{t('pick_offer')}</Text>
    </Pressable>
  );
};

export default memo(PickOffer);
