import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useLookUpPriceStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      container: {},
      text: {},
      modalContainer: {
        marginHorizontal: isWide ? 400 : 80,
        marginVertical: isWide ? 200 : 200,
      },
      textInput: {
        width: '100%',
      },
      warningMessage: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 16,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useLookUpPriceStyle;
