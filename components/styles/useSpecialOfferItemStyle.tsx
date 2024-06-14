import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useSpecialOfferItemStyle = (
  theme: MD3Theme,
  selected: boolean,
  applicable: boolean
) => {
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
        backgroundColor: selected
          ? theme.colors.primary
          : theme.colors.onPrimary,
        borderColor: applicable
          ? theme.colors.primary
          : theme.colors.onBackground,
        borderWidth: applicable ? 2 : 0,
      },
      group: {
        width: '70%',
        flexDirection: 'column',
      },
      iconButtonSize: {
        width: 32,
      },
      applicableProductsText: {
        color: selected ? theme.colors.outlineVariant : theme.colors.outline,
      },
      offerName: {
        color: selected ? theme.colors.onPrimary : theme.colors.primary,
        fontSize: isWide ? 18 : 16,
      },
      warningText: {
        color: theme.colors.outlineVariant,
        fontSize: isWide ? 20 : 16,
      },
      snackbar: {padding: 10, zIndex: 2, elevation: 2},
    });
  }, [theme, width, selected]);
  return {styles};
};

export default useSpecialOfferItemStyle;
