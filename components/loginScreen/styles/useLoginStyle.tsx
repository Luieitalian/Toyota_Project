import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useLoginStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonContainer: {
        maxHeight: 50,
        minWidth: isWide ? '60%' : '100%',
        marginTop: 20,
        backgroundColor: theme.colors.primary,
      },
      buttonText: {
        color: theme.colors.onPrimary,
        fontSize: isWide ? 15 : 15,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useLoginStyle;
