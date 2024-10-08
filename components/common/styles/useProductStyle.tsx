import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {breakPoint} from '@/globals/style';

const useProductStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      productContainer: {
        padding: 8,
        height: 250,
        width: isWide ? width / 5 : width / 3.4,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        elevation: 5,
        borderRadius: 5,
      },
      name: {
        fontSize: isWide ? 18 : 14,
        color: 'black',
        textAlign: 'center',
      },
      price: {
        fontSize: isWide ? 20 : 14,
        fontFamily: 'Roboto-Bold',
        color: theme.colors.primary,
      },
      amount_attribute: {
        fontSize: isWide ? 18 : 14,
        color: 'black',
        opacity: 0.4,
      },
      image: {
        flex: 1,
        width: isWide ? 150 : 100,
        height: isWide ? 150 : 100,
        resizeMode: 'contain',
      },
      addButton: {
        position: 'absolute',
        left: 0,
        top: 0,
      },
      addButtonColors: {
        color: theme.colors.primary,
        backgroundColor: theme.colors.onPrimary,
      },
      addButtonSize: {
        width: isWide ? 40 : 24,
      },
      favoriteButton: {
        position: 'absolute',
        right: 0,
        top: 0,
      },
      favoriteButtonColors: {
        color: theme.colors.secondary,
        backgroundColor: theme.colors.onSecondary,
      },
      favoriteButtonSize: {
        width: isWide ? 40 : 24,
      },
      badge: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: theme.colors.primary,
        color: theme.colors.onPrimary,
        opacity: 0.9,
      },
      badgeSize: {
        width: isWide ? 26 : 24,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useProductStyle;
