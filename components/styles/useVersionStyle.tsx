import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useVersionStyle = (theme: MD3Theme) => {
  const {height, width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      version: {
        color: theme.colors.onSecondary,
        fontFamily: 'Roboto-Light',
        fontSize: isWide ? 20 : 16,
      },
      versionView: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useVersionStyle;
