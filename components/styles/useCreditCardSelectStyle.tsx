import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

type useCreditCardSelectStyleArgs = {
  theme: MD3Theme;
  isCash: boolean;
};

const useCreditCardSelectStyle = ({
  theme,
  isCash,
}: useCreditCardSelectStyleArgs) => {
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {
        backgroundColor: isCash ? theme.colors.secondary : theme.colors.primary,
      },
      text: {},
    });
  }, [theme, isCash]);
  return {styles};
};

export default useCreditCardSelectStyle;
