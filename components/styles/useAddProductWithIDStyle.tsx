import React from 'react';
import {StyleSheet} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useAddProductWithIDStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {},
      text: {},
    });
  }, [theme]);

  return {styles};
};

export default useAddProductWithIDStyle;
