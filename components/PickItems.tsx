import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import usePickItemsStyle from './styles/usePickItemsStyle';
import CustomButton from './common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useTranslation} from 'react-i18next';

const PickItems = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = usePickItemsStyle(theme);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const onPress = () => {
    console.log('Pick items');
    navigation.navigate('ProductsScreen');
  };

  return (
    <CustomButton onPress={onPress} overridingButtonStyles={styles}>
      {t('pick_items')}
    </CustomButton>
  );
};

export default memo(PickItems);
