import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePastSaleDataRowStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      modalContainer: {
        padding: 20,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePastSaleDataRowStyle;
