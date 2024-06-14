import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useCartItemStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      container: {
        flex: 1,
        minHeight: isWide ? 100 : 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.onPrimary,
        paddingHorizontal: isWide ? 24 : 12,
        borderRadius: 10,
        margin: isWide ? 10 : 5,
      },
      nameAndAmount: {
        flexDirection: 'column',
      },
      amount: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 16,
      },
      name: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 16,
      },
      pricingText: {
        fontSize: isWide ? 20 : 16,
        color: theme.colors.onPrimaryContainer,
      },
      removeButton: {
        backgroundColor: theme.colors.error,
        color: theme.colors.onError,
        width: isWide ? 32 : 24,
      },
      priceAndRemove: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCartItemStyle;
