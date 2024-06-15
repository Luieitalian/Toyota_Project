import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePayWithCreditCardStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        margin: 0,
        padding: 20,
        backgroundColor: theme.colors.primary,
      },
      buttonText: {
        fontSize: 18,
      },
      buttonAndroidRipple: {
        color: theme.colors.onPrimary,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default usePayWithCreditCardStyle;
