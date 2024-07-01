import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useCartIconStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      pressable: {
        elevation: 1,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
        padding: 10,
      },
      badge: {
        position: 'absolute',
        right: 10,
        top: 10,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCartIconStyle;
