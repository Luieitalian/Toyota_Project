import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

const useSalesScreenStyle = () => {
  const {width, height} = useWindowDimensions();
  const theme = useTheme();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      container: {
        flex: 1,
        flexDirection: isWide ? 'row' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTitleStyle: {
        color: theme.colors.onBackground,
      },
      headerTint: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);

  return {styles, theme};
};

export default useSalesScreenStyle;
