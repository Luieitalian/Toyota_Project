import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

export type useCashSelectStyleArgs = {
  theme: MD3Theme;
  isCash: boolean;
};

const useCashSelectStyle = ({theme, isCash}: useCashSelectStyleArgs) => {
  const width = useWindowDimensions();
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      buttonContainer: {
        backgroundColor: isCash ? theme.colors.primary : theme.colors.secondary,
      },
      buttonText: {},
    });
  }, [isCash, theme, width]);

  return {styles};
};

export default useCashSelectStyle;
