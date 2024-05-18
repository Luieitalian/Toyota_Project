import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useItemIDInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      textInput: {
        flex: 1,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: isWide ? 20 : 16,
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
