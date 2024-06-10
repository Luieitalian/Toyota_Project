import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useCreditCardDateInputStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      cardDateTextInput: {},
      cardDateTextInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.onBackground,
      },
      cardDateTextInputActiveOutline: {
        color: theme.colors.onBackground,
      },
      cardDateTextInputText: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme]);
  return {styles};
};

export default useCreditCardDateInputStyle;
