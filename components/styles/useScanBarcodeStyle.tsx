import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useScanBarcodeStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {},
      text: {},
    });
  }, [theme]);

  return {styles};
};

export default useScanBarcodeStyle;
