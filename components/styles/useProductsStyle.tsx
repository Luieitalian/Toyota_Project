import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useProductsStyle = (theme: MD3Theme) => {
  const {width, height} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      flatlistContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      flatlist: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingBottom: 20,
      },
      listEmptyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      listEmptyViewText: {
        fontSize: isWide ? 24 : 18,
        color: theme.colors.onBackground,
      },
      pleaseWait: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useProductsStyle;
