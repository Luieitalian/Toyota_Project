import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useItemIDInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;

    return StyleSheet.create({
      textInput: {
        flex: 1,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 10,
        fontSize: isWide ? 14 : 10,
        color: theme.colors.onSecondary,
      },
      textInputPlaceholder: {
        color: theme.colors.onSecondary,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useItemIDInputStyle;
