import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePickItemsStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {},
      buttonText: {
        fontSize: isWide ? 20 : 20,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default usePickItemsStyle;
