import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePastSalesScreenStyle = () => {
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
      searchBarContainer: {
        flex: 0,
        padding: 20,
        alignItems: 'center',
        width: '100%',
      },
      searchBarInput: {
        width: '100%',
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles, theme};
};

export default usePastSalesScreenStyle;
