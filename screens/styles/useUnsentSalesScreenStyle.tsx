import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useUnsentSalesScreenStyle = () => {
  const theme = useTheme();
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      },
      contentContainer: {
        flex: 1,
      },
    });
  }, [theme, width]);
  return {styles, theme};
};

export default useUnsentSalesScreenStyle;
