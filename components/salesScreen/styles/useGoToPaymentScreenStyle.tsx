import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useGoToPaymentScreenStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonContainer: {
        flex: 0,
        padding: 20,
      },
      buttonText: {
        fontSize: isWide ? 20 : 16,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useGoToPaymentScreenStyle;
