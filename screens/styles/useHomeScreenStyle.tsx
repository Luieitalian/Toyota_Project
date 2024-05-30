import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useHomeScreenStyle = () => {
  const theme = useTheme();
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
      },
      group: {
        flex: 1,
        paddingHorizontal: isWide ? 60 : 20,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      },
      headerTitleStyle: {
        color: theme.colors.onBackground,
      },
      headerStyle: {
        backgroundColor: theme.colors.background,
      },
      headerTint: {
        color: theme.colors.onBackground,
      },
    });
  }, [theme, width]);
  return {styles, theme};
};

export default useHomeScreenStyle;
