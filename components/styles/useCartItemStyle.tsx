import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useCartItemStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    return StyleSheet.create({
      container: {
        flex: 1,
        minHeight: isWide ? 100 : 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: theme.colors.primaryContainer,
        paddingHorizontal: isWide ? 24 : 12,
        borderRadius: 10,
        margin: isWide ? 10 : 5,
      },
      nameAndAmount: {
        flexDirection: 'column',
      },
      amount: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 24 : 18,
      },
      name: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 24 : 16,
      },
      pricingText: {
        fontSize: isWide ? 24 : 18,
        color: theme.colors.onPrimaryContainer,
      },
      removeButton: {
        backgroundColor: theme.colors.onError,
        color: theme.colors.error,
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
