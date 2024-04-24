import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useProductsScreenStyle = () => {
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
        filtersContainer: {
          flex: 1,
        },
        productsContainer: {
          flex: 1,
        },
      }),
    [theme]
  );
  return {styles, theme};
};

export default useProductsScreenStyle;
