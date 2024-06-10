import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useCreditCardNumberInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      cardNumberTextInput: {},
      cardNumberTextInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.onBackground,
      },
      cardNumberTextInputActiveOutline: {
        color: theme.colors.onBackground,
      },
      cardNumberTextInputText: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme]);
  return {styles};
};

export default useCreditCardNumberInputStyle;
