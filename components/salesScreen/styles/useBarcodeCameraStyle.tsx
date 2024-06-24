import React from 'react';
import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useBarcodeCameraStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    return StyleSheet.create({
      camera: {
        position: 'absolute',
        minWidth: Dimensions.get('screen').width,
        minHeight: Dimensions.get('screen').height,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useBarcodeCameraStyle;
