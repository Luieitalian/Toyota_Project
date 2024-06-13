import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useReceiptMailStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonContainer: {},
      buttonText: {},
      modalContainer: {
        justifyContent: 'center',
        marginHorizontal: isWide ? 400 : 80,
        marginVertical: isWide ? 300 : 300,
      },
      textInput: {
        width: '100%',
      },
      buttonGroup: {
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

export default useReceiptMailStyle;
