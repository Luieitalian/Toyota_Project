import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

const useProductsScreenStyle = () => {
  const theme = useTheme();
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        screenView: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingTop: 5,
          gap: 5,
          backgroundColor: theme.colors.background,
        },
        wrapper: {
          flex: 1,
          flexDirection: 'row',
          gap: 5,
        },
        filtersContainer: {
          flex: 1,
        },
        productsContainer: {
          flex: 1,
        },
        listHeader: {
          flex: 0.2,
          width: '100%',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 14,
        },
        flatlistContainer: {
          flex: 1,
        },
        flatlist: {
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
          paddingBottom: 10,
        },
      }),
    [theme]
  );
  return {styles, theme};
};

export default useProductsScreenStyle;
