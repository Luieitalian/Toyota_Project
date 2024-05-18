import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useSpecialOfferItemStyles = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      itemContainer: {
        width: '100%',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      group: {
        width: '70%',
        flexDirection: 'column',
      },
      iconButtonSize: {
        width: 32,
      },
      applicableProductsText: {
        flex: 1,
        flexWrap: 'wrap',
        color: theme.colors.outline,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useSpecialOfferItemStyles;
