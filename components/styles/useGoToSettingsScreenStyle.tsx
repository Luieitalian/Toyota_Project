import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useGoToSettingsScreenStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        flex: 0,
        minHeight: 100,
      },
      text: {
        fontSize: isWide ? 20 : 16,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useGoToSettingsScreenStyle;
