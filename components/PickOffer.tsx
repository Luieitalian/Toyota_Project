import {TFunction} from 'i18next';
import React, {memo} from 'react';
import {Pressable, Text, View} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import usePickOfferStyle from './styles/usePickOfferStyle';
import CustomButton from './CustomButton';

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
    <CustomButton onPress={onPress} styles={styles} theme={theme}>
      {t('pick_offer')}
    </CustomButton>
  );
};

export default memo(PickOffer);
