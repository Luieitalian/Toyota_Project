import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {breakPoint} from '../../globals/style';

const useSalesScreenPricingStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderTopColor: theme.colors.outlineVariant,
      },
      subTotalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 0.25,
        borderRightColor: theme.colors.outlineVariant,
      },
      subTotalText: {
        fontSize: isWide ? 18 : 14,
        color: theme.colors.outline,
      },
      subTotalPriceText: {
        fontSize: isWide ? 24 : 18,
        color: theme.colors.onBackground,
      },
      paymentTotalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 0.25,
        borderLeftColor: theme.colors.outlineVariant,
      },
      paymentTotalText: {
        fontSize: isWide ? 18 : 14,
        color: theme.colors.outline,
      },
      paymentTotalPriceText: {
        fontSize: isWide ? 24 : 18,
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useSalesScreenPricingStyle;
