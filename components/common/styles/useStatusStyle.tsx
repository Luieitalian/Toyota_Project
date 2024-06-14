import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../../globals/style';

const useStatusStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        backgroundColor: theme.colors.background,
        borderWidth: 2,
        borderColor: theme.colors.outlineVariant,
        borderRadius: 10,
        padding: 10,
      },
      group: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      text: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useStatusStyle;
