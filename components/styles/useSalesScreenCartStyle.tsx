import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

const useSalesScreenCartStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;

    return StyleSheet.create({
      container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'column',
        borderColor: theme.colors.primaryContainer,
        borderWidth: 2,
        borderRadius: 10,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useSalesScreenCartStyle;
