import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useLoginStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const isWide = width >= breakPoint;

  const styles = React.useMemo(() => {
    return StyleSheet.create({
      button: {
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: theme.colors.primary,
      },
      buttonLabel: {
        color: theme.colors.onPrimary,
        fontSize: isWide ? 15 : 15,
      },
    });
  }, [theme, isWide]);

  return {styles};
};

export default useLoginStyle;
