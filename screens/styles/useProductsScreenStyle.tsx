import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';

const useProductsScreenStyle = () => {
  const theme = useTheme();
  const {width, height} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 5,
        gap: 5,
        backgroundColor: theme.colors.background,
      },
      listHeader: {
        flex: isWide ? 0.4 : 0.3,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 14,
      },
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
  return {styles, theme};
};

export default useProductsScreenStyle;
