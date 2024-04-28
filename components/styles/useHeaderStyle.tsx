import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';

const useHeaderStyle = (theme: MD3Theme) => {
  const {height, width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= 900;
    console.log('Width: ', width);
    console.log('Height: ', height);
    return StyleSheet.create({
      header: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
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
        width: isWide ? 40 : 30,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useHeaderStyle;
