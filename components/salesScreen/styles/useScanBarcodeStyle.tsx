import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useScanBarcodeStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      buttonContainer: {},
      buttonText: {},
      modalContainer: {
        marginHorizontal: 0,
        marginVertical: 0,
        borderRadius: 0,
        padding: 0,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useScanBarcodeStyle;
