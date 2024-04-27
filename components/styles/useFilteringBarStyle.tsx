import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useFilteringBarStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        filteringBarContainer: {
          flex: 1,
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'center',
        },
        categoryMenu: {
          backgroundColor: theme.colors.background,
        },
        menuItem: {
          color: theme.colors.onBackground,
        },
      }),
    [theme]
  );
  return {styles};
};

export default useFilteringBarStyle;
