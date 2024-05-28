import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

type useCashSelectStyleArgs = {
  theme: MD3Theme;
  isCash: boolean;
};

const useCashSelectStyle = ({theme, isCash}: useCashSelectStyleArgs) => {
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: isCash ? theme.colors.primary : theme.colors.secondary,
      },
      text: {},
    });
  }, [theme]);

  return {styles};
};

export default useCashSelectStyle;
