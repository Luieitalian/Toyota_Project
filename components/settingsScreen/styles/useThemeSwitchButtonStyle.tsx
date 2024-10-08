import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useThemeSwitchButtonStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      switchView: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
      },
      text: {
        color: theme.colors.onBackground,
      },
      switch: {
        alignSelf: 'flex-start',
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useThemeSwitchButtonStyle;
