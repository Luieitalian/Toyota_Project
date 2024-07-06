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
      modalContainer: {
        marginVertical: isWide ? 250 : 300,
      },
      interactionGroup: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      receivingPaymentText: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 18,
      },
      dialogText: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 18,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePaymentInteractionsStyle;
