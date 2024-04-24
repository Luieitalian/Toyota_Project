import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useLoginScreenStyle = () => {
  const theme = useTheme();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        view: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          backgroundColor: theme.colors.surfaceVariant,
        },
        wrapper: {
          flex: 1,
          marginTop: 24,
          marginBottom: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.onSecondaryContainer,
          borderRadius: 12,
          padding: 40,
          paddingBottom: 10,
          width: '80%',
        },
        contentWrapper: {
          flex: 0.6,
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        welcome: {
          fontSize: 40,
          fontFamily: 'Roboto-Light',
          textAlign: 'center',
          color: theme.colors.background,
        },
        header: {
          flex: 0.08,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          gap: 20,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.surfaceVariant,
        },
        changeLanguage: {
          backgroundColor: theme.colors.onBackground,
          borderRadius: 100,
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        menu: {
          backgroundColor: theme.colors.background,
        },
        menuItem: {
          color: theme.colors.onBackground,
        },
        divider: {
          width: '100%',
          borderWidth: 0.2,
          borderColor: theme.colors.onSurface,
        },
        icon: {
          color: theme.colors.background,
        },
        form: {
          gap: 10,
        },
        textInput: {
          minWidth: '100%',
          backgroundColor: theme.colors.surfaceVariant,
          borderRadius: 10,
          color: theme.colors.onSurfaceVariant,
          paddingHorizontal: 15,
        },
        footer: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        version: {
          color: theme.colors.surfaceVariant,
          fontFamily: 'Roboto-Medium',
        },
      }),
    [theme]
  );
  return {styles, theme};
};

export default useLoginScreenStyle;
