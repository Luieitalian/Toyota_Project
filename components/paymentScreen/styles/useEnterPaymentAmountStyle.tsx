import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useEnterPaymentAmountStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      textInput: {
        minWidth: isWide ? '60%' : '100%',
        height: 60,
        fontSize: isWide ? 18 : 16,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
        paddingHorizontal: 15,
      },
      textInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.primary,
      },
      textInputActiveOutline: {
        color: theme.colors.primary,
      },
      textInputText: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useEnterPaymentAmountStyle;
