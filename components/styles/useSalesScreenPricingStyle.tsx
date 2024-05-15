import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

const useSalesScreenPricingStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;

    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        borderTopWidth: 3,
        borderTopColor: theme.colors.primaryContainer,
      },
      subTotalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: theme.colors.primaryContainer,
      },
      subTotalText: {
        fontSize: isWide ? 18 : 14,
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
        borderLeftWidth: 2,
        borderLeftColor: theme.colors.primaryContainer,
      },
      paymentTotalText: {
        fontSize: isWide ? 18 : 14,
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
