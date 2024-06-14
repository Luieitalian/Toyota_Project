import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useProductsScreenStyle = () => {
  const theme = useTheme();
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 5,
        gap: 5,
        backgroundColor: theme.colors.background,
      },
      listHeader: {
        flex: isWide ? 0.4 : 0.3,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 14,
      },
      productsContainer: {
        flex: 1,
      },
    });
  }, [theme, width]);
  return {styles, theme};
};

export default useProductsScreenStyle;
