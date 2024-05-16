import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

const useProductStyle = (theme: MD3Theme) => {
  const {width, height} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= 900;

    return StyleSheet.create({
      productContainer: {
        padding: 8,
        minHeight: 50,
        width: isWide ? 260 : 120,
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
    });
  }, [theme, width]);
  return {styles};
};

export default useProductStyle;
