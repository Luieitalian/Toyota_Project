import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const usePayStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors.primary,
      },
      text: {
        color: theme.colors.onPrimary,
      },
    });
  }, [theme]);

  return {styles};
};

export default usePayStyle;
