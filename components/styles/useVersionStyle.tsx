import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useVersionStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        version: {
          color: theme.colors.surfaceVariant,
          fontFamily: 'Roboto-Medium',
        },
        loading: {
          color: theme.colors.surfaceVariant,
          fontFamily: 'Roboto-Medium',
        },
        versionView: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [theme]
  );
  return {styles, theme};
};

export default useVersionStyle;
