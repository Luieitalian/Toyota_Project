import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePastSaleDataTitleStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        alignItems: 'center',
        flexDirection: 'row',
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePastSaleDataTitleStyle;
