import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useCreditCardSelectStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    return StyleSheet.create({
      container: {
        flex: 1,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        margin: 10,
      },
      text: {
        fontSize: isWide ? 24 : 18,
        textAlign: 'center',
        color: theme.colors.onSecondary,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCreditCardSelectStyle;
