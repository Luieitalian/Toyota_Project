import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useSalesScreenStyle = () => {
  const {width, height} = useWindowDimensions();
  const theme = useTheme();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        backgroundColor: theme.colors.background,
      },
      container: {
        flex: 1,
        margin: 20,
        gap: 10,
        borderWidth: 1,
        borderColor: theme.colors.outlineVariant,
        borderRadius: 10,
        flexDirection: isWide ? 'row' : 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  }, [theme, width]);

  return {styles, theme};
};

export default useSalesScreenStyle;
