import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useScanBarcodeStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      buttonContainer: {},
      buttonText: {},
    });
  }, [theme, width]);

  return {styles};
};

export default useScanBarcodeStyle;
