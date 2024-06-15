import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePaymentInteractionsStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        flex: 1,
        gap: isWide ? 10 : 20,
        //backgroundColor: 'purple',
      },
      interactionGroup: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePaymentInteractionsStyle;
