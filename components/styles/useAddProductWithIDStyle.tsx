import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useAddProductWithIDStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      buttonContainer: {
        paddingHorizontal: 5,
      },
      buttonText: {},
    });
  }, [theme, width]);

  return {styles};
};

export default useAddProductWithIDStyle;
