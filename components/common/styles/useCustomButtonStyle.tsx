import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useCustomButtonStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonContainer: {
        flex: 1,
        elevation: 4,
        justifyContent: 'center',
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 2,
      },
      buttonText: {
        fontSize: isWide ? 20 : 10,
        textAlign: 'center',
        color: theme.colors.onSecondary,
        fontWeight: '500',
      },
      buttonAndroidRipple: {
        color: theme.colors.onSecondary,
      },
    });
  }, [theme, width]);

  return [styles];
};

export default useCustomButtonStyle;
