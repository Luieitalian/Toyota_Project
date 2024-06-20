import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useDoneButtonStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      doneButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
      },
      doneText: {
        color: theme.colors.onPrimary,
        fontSize: isWide ? 18 : 16,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useDoneButtonStyle;
