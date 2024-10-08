import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePickOfferStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return isWide
      ? StyleSheet.create({
          buttonContainer: {
            margin: 0,
            maxHeight: 80,
            padding: 20,
          },
          buttonText: {
            fontSize: 18,
          },
        })
      : StyleSheet.create({
          buttonContainer: {
            margin: 0,
            padding: 20,
          },
          buttonText: {
            fontSize: 18,
          },
        });
  }, [theme, width]);
  return {styles};
};

export default usePickOfferStyle;
