import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useProductsStyle = (theme: MD3Theme) => {
  const {width, height} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;
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
        paddingTop: 10,
        paddingBottom: 20,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useProductsStyle;
