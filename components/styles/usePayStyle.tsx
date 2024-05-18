import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const usePayStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors.primary,
      },
      text: {
        fontSize: isWide ? 32 : 20,
        color: theme.colors.onPrimary,
      },
    });
  }, [theme]);

  return {styles};
};

export default usePayStyle;
