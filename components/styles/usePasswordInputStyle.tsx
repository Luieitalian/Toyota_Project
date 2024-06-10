import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const usePasswordInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const isWide = width >= breakPoint;

  const styles = React.useMemo(() => {
    return StyleSheet.create({
      textInput: {
        minWidth: isWide ? '60%' : '100%',
        height: 60,
        fontSize: isWide ? 20 : 18,
        backgroundColor: theme.colors.onBackground,
        borderRadius: 10,
        color: theme.colors.onBackground,
        paddingHorizontal: 15,
      },
      textInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.background,
      },
      textInputActiveOutline: {
        color: theme.colors.background,
      },
      textInputText: {
        color: theme.colors.background,
      },
      textInputIcon: {
        marginTop: 15,
      },
    });
  }, [theme, isWide]);

  return {styles};
};

export default usePasswordInputStyle;
