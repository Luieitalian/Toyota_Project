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
      containerRow: {
        flex: 1,
        flexDirection: 'row',
        padding: isWide ? 30 : 20,
      },
      containerCol: {
        flex: 1,
        flexDirection: 'column',
        padding: isWide ? 30 : 20,
      },
    });
  }, [theme, width]);

  return {styles, theme};
};

export default usePaymentScreenStyle;
