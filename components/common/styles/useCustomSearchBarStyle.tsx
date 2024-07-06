import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useCustomSearchBarStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      searchBarContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
      },
      searchBarInput: {
        width: '100%',
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useCustomSearchBarStyle;
