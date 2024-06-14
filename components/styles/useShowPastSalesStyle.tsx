import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useShowPastSalesStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        flex: 0,
        minHeight: 100,
      },
      buttonText: {
        fontSize: isWide ? 20 : 16,
      },
      modalContainer: {
        marginHorizontal: isWide ? 100 : 25,
        marginVertical: isWide ? 100 : 100,
      },
      receiptWrapper: {
        borderWidth: 1,
        borderColor: theme.colors.outline,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
      },
      emptySalesText: {
        color: theme.colors.outline,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useShowPastSalesStyle;
