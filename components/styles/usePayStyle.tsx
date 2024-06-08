import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const usePayStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const isWide = width >= breakPoint;

  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors.primary,
      },
      text: {
        fontSize: 20,
      },
      receiptText: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.background,
      },
      modal: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        elevation: 5,
        marginHorizontal: isWide ? 350 : 30,
        marginVertical: isWide ? 30 : 30,
        backgroundColor: 'white',
        borderRadius: 10,
      },
    });
  }, [theme, isWide]);

  return {styles};
};

export default usePayStyle;
