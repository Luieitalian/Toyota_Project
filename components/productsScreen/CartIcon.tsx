import {ShoppingCartContext} from '@/contexts/ShoppingCartContext/ShoppingCartContext';
import React, {memo, useContext, useMemo} from 'react';
import {Pressable, View} from 'react-native';
import {Badge, Icon, IconButton, useTheme} from 'react-native-paper';
import CustomButton from '../common/CustomButton';
import useCartIconStyle from './styles/useCartIconStyle';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CartIcon = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {cart} = useContext(ShoppingCartContext);
  const {styles} = useCartIconStyle(theme);

  const isBadgeVisible = useMemo(() => {
    return cart.length > 0;
  }, [cart]);

  const onPress = () => {
    navigation.pop();
  };

  return (
    <Pressable style={styles.pressable} onPress={onPress}>
      <Icon size={30} source="cart-outline" />
      {isBadgeVisible ? <Badge style={styles.badge} size={10} /> : null}
    </Pressable>
  );
};

export default memo(CartIcon);
