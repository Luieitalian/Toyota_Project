import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useShowSpecialOffersStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        flex: 1,
        minHeight: 100,
      },
      buttonText: {
        fontSize: isWide ? 20 : 16,
      },
      modalContainer: {
        padding: 20,
        marginHorizontal: isWide ? 300 : 50,
        marginVertical: isWide ? 100 : 100,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useShowSpecialOffersStyle;
