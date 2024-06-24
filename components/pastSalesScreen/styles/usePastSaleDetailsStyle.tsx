import React from 'react';
import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePastSaleDetailsStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      modalContainer: {
        padding: 20,
        marginHorizontal: isWide ? 150 : 20,
      },
      container: {
        flex: 1,
        gap: 20,
        padding: 20,
        justifyContent: 'center',
        width: '100%',
      },
      saleDetailText: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.onBackground,
      },
      flatlist: {
        padding: isWide ? 40 : 0,
      },
      dialogContent: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 16 : 14,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePastSaleDetailsStyle;
