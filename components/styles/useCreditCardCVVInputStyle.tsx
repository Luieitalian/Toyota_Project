import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useCreditCardCVVInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      cardCVVTextInput: {
        flex: 1,
        fontSize: isWide ? 24 : 18,
      },
      cardCVVTextInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.onBackground,
      },
      cardCVVTextInputActiveOutline: {
        color: theme.colors.onBackground,
      },
      cardCVVTextInputText: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCreditCardCVVInputStyle;
