import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useCustomModalStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      modalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        elevation: 5,
        marginHorizontal: isWide ? 300 : 30,
        marginVertical: isWide ? 100 : 100,
        padding: isWide ? 60 : 40,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
      },
    });
  }, [theme, width]);
  return [styles];
};

export default useCustomModalStyle;
