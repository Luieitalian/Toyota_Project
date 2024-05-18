import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useFilteringBarStyle = (theme: MD3Theme) => {
  const {width, height} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    return StyleSheet.create({
      filteringBarContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isWide ? 20 : 0,
        marginBottom: isWide ? 20 : 0,
      },
      categoryMenu: {
        backgroundColor: theme.colors.background,
      },
      menuItem: {
        color: theme.colors.onBackground,
      },
      icon: {
        width: isWide ? 48 : 30,
        color: theme.colors.onBackground,
      },
      disabledIcon: {
        color: theme.colors.outline,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useFilteringBarStyle;
