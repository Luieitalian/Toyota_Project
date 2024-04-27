import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useVersionStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        version: {
          color: theme.colors.onSecondaryContainer,
          fontFamily: 'Roboto-Light',
        },
        loading: {
          color: theme.colors.onSecondaryContainer,
          fontFamily: 'Roboto-Light',
        },
        versionView: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    [theme]
  );
  return {styles};
};

export default useVersionStyle;
