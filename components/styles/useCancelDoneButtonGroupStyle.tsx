import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useCancelDoneButtonGroupStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonGroup: {
        flex: 1,
        minHeight: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      cancelButton: {
        backgroundColor: theme.colors.error,
        borderRadius: 10,
      },
      doneButton: {
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
      },
      cancelText: {
        color: theme.colors.onError,
        fontSize: isWide ? 18 : 16,
      },
      doneText: {
        color: theme.colors.onPrimary,
        fontSize: isWide ? 18 : 16,
      },
    });
  }, [theme, width]);
  return {styles};
};

export default useCancelDoneButtonGroupStyle;
