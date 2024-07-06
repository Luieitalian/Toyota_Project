import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePaymentProductsStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonContainer: {
        flex: 0,
        margin: 0,
        padding: 20,
      },
      buttonText: {
        fontSize: 18,
      },
      headerText: {
        fontSize: 24,
        color: theme.colors.onBackground,
        textAlign: 'center',
      },
      containerWide: {
        flex: 1.4,
        //backgroundColor: 'red',
        borderColor: theme.colors.outlineVariant,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      containerThin: {
        flex: 1,
        width: '100%',
        gap: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
      },
      modalContainer: {},
      emptyText: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePaymentProductsStyle;
