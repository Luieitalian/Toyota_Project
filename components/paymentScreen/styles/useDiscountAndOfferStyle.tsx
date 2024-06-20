import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useDiscountAndOfferStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      container: {
        padding: isWide ? 20 : 20,
        borderRadius: 10,
        backgroundColor: theme.colors.tertiary,
      },
      text: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.onTertiary,
        textAlign: 'left',
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useDiscountAndOfferStyle;
