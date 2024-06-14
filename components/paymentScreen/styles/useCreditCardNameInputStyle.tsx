import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useCreditCardNameInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      cardNameTextInput: {
        fontSize: isWide ? 24 : 18,
      },
      cardNameTextInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.onBackground,
      },
      cardNameTextInputActiveOutline: {
        color: theme.colors.onBackground,
      },
      cardNameTextInputText: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCreditCardNameInputStyle;
