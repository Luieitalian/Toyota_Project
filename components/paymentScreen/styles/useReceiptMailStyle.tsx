import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useReceiptMailStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return isWide
      ? StyleSheet.create({
          buttonContainer: {
            margin: 0,
            maxHeight: 80,
            padding: 20,
          },
          buttonText: {
            fontSize: 18,
          },
          textInput: {
            width: '100%',
          },
          modalContainer: {
            marginHorizontal: 200,
            marginVertical: 250,
          },
          title: {
            fontSize: 18,
            color: theme.colors.onBackground,
          },
        })
      : StyleSheet.create({
          buttonContainer: {
            margin: 0,
            padding: 20,
          },
          buttonText: {
            fontSize: 18,
          },
          textInput: {
            width: '100%',
          },
          modalContainer: {
            marginHorizontal: 50,
            marginVertical: 320,
          },
          title: {
            fontSize: 18,
            color: theme.colors.onBackground,
          },
        });
  }, [theme, width]);
  return {styles};
};

export default useReceiptMailStyle;
