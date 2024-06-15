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
        flex: 1,
        backgroundColor: theme.colors.tertiary,
      },
      text: {
        color: theme.colors.onTertiary,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useRemainingPriceStyle;
