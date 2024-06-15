import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useRemainingPriceStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isWide ? 20 : 20,
        borderRadius: 10,
        backgroundColor: theme.colors.tertiary,
      },
      text: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.onTertiary,
        textAlign: 'center',
      },
      amountText: {
        fontSize: isWide ? 24 : 20,
        color: theme.colors.onTertiary,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useRemainingPriceStyle;
