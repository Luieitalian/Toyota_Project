import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePaymentScreenStyle = () => {
  const {width} = useWindowDimensions();
  const theme = useTheme();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      container: {
        flex: 1,
        gap: isWide ? 10 : 20,
        padding: isWide ? 30 : 20,
      },
      containerScrollView: {},
      containerRow: {
        flexDirection: 'row',
      },
      containerCol: {
        flexDirection: 'column',
      },
    });
  }, [theme, width]);

  return {styles, theme};
};

export default usePaymentScreenStyle;
