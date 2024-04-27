import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useHeaderStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        header: {
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          gap: 20,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.background,
        },
        changeLanguage: {
          backgroundColor: theme.colors.onBackground,
          borderRadius: 100,
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        icon: {
          color: theme.colors.background,
        },
        menu: {
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

export default useHeaderStyle;
