import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePayStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        backgroundColor: theme.colors.primary,
      },
      buttonText: {
        fontSize: 20,
      },
      receiptText: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.background,
      },
      modalContainer: {
        marginHorizontal: isWide ? 350 : 30,
        marginVertical: isWide ? 30 : 30,
        backgroundColor: 'white',
      },
    });
  }, [theme, width]);

  return {styles};
};

export default usePayStyle;
