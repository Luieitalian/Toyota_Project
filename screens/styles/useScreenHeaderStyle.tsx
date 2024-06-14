import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useScreenHeaderStyle = () => {
  const theme = useTheme();
  const {width} = useWindowDimensions();

  const headerStyles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      headerTitleStyle: {
        color: theme.colors.onBackground,
      },
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTint: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {headerStyles, theme};
};

export default useScreenHeaderStyle;
