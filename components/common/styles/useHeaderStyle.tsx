import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useHeaderStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      header: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: isWide ? 30 : 20,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.background,
      },
      changeLanguage: {
        backgroundColor: theme.colors.onBackground,
        borderRadius: 200,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        color: theme.colors.background,
      },
      menu: {
        backgroundColor: theme.colors.background,
      },
      menuItem: {
        color: theme.colors.onBackground,
      },
      iconSize: {
        width: isWide ? 28 : 22,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useHeaderStyle;
