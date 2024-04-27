import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';

const useProductStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        productContainer: {
          padding: 8,
          minHeight: 50,
          width: '30%',
          backgroundColor: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          elevation: 5,
          borderRadius: 5,
        },
        name: {
          color: 'black',
          textAlign: 'center',
        },
        price: {
          fontFamily: 'Roboto-Bold',
          color: theme.colors.primary,
        },
        amount_attribute: {
          color: 'black',
          opacity: 0.4,
        },
        image: {
          flex: 1,
          width: 100,
          height: 100,
          resizeMode: 'contain',
        },
      }),
    [theme]
  );
  return {styles};
};

export default useProductStyle;
