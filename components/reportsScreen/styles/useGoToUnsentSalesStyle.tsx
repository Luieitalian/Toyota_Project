import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useGoToUnsentSalesStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        flex: 1,
        minHeight: 100,
      },
      buttonText: {
        fontSize: isWide ? 20 : 16,
      },
      modalContainer: {
        marginHorizontal: isWide ? 100 : 25,
        marginVertical: isWide ? 100 : 100,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useGoToUnsentSalesStyle;
