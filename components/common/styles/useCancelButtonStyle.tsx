import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useCancelButtonStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      cancelButton: {
        backgroundColor: theme.colors.error,
        borderRadius: 10,
      },
      cancelText: {
        color: theme.colors.onError,
        fontSize: isWide ? 18 : 16,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCancelButtonStyle;
