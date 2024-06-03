import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useUsernameInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      textInput: {
        minWidth: '100%',
        minHeight: 70,
        fontSize: isWide ? 22 : 18,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
        color: theme.colors.onBackground,
        paddingHorizontal: 15,
      },
      placeholderText: {
        color: theme.colors.onSurfaceVariant,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useUsernameInputStyle;
