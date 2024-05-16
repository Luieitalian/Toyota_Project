import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const usePickOfferStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      container: {},
      text: {},
    });
  }, [theme]);
  return {styles};
};

export default usePickOfferStyle;
