import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useShowPastSalesStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      container: {
        flex: 0,
        minHeight: 100,
      },
      text: {
        fontSize: isWide ? 20 : 16,
      },
      modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        elevation: 5,
        marginHorizontal: isWide ? 100 : 25,
        marginVertical: isWide ? 200 : 100,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
      },
      receiptWrapper: {
        borderWidth: 1,
        borderColor: theme.colors.outline,
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useShowPastSalesStyle;
