import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useSynchronizeUnsentCartsStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      wrapper: {
        flex: 1,
      },
      buttonContainer: {
        minHeight: 100,
        paddingHorizontal: 5,
      },
      buttonText: {
        fontSize: isWide ? 20 : 16,
      },
      badgeView: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: theme.colors.primary,
      },
      badge: {
        width: isWide ? 40 : 30,
      },
      dialogText: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useSynchronizeUnsentCartsStyle;
