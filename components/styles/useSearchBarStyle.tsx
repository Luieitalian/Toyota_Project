import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';

const useSearchBarStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        searchBarContainer: {
          flex: 1,
          alignItems: 'center',
          width: '100%',
        },
        textInput: {
          width: '100%',
          color: theme.colors.onBackground,
        },
      }),
    [theme]
  );
  return {styles};
};

export default useSearchBarStyle;
