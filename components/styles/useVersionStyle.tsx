import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useVersionStyle = (theme: MD3Theme) => {
  const {height, width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    return StyleSheet.create({
      version: {
        color: theme.colors.onPrimary,
        fontFamily: 'Roboto-Light',
        fontSize: isWide ? 24 : 18,
      },
      loading: {
        color: theme.colors.onPrimary,
        fontFamily: 'Roboto-Light',
        fontSize: isWide ? 24 : 18,
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
