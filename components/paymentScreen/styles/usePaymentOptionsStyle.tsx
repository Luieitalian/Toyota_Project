import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePaymentOptionsStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        gap: 20,
        // backgroundColor: 'red',
      },
      containerWide: {
        flex: 1,
        flexDirection: 'column',
      },
      containerThin: {
        gap: 20,
        flexDirection: 'column',
      },
      flexColWide: {
        flex: 1,
        flexDirection: 'column',
        gap: 20,
      },
      flexRowThin: {
        gap: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePaymentOptionsStyle;
