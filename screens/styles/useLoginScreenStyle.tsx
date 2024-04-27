import React from 'react';
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
          backgroundColor: theme.colors.background,
        },
        wrapper: {
          flex: 1,
          marginTop: 12,
          marginBottom: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.secondaryContainer,
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
          fontSize: 46,
          fontFamily: 'Roboto-Regular',
          textAlign: 'center',
          color: theme.colors.onSecondaryContainer,
        },
        divider: {
          width: '100%',
          borderWidth: 0.2,
          borderColor: theme.colors.onBackground,
        },
        form: {
          gap: 10,
        },
        textInput: {
          minWidth: '100%',
          backgroundColor: theme.colors.background,
          borderRadius: 10,
          color: theme.colors.onBackground,
          paddingHorizontal: 15,
        },
      }),
    [theme]
  );
  return {styles, theme};
};

export default useLoginScreenStyle;
