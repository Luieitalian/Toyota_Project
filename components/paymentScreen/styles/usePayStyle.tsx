import React from 'react';
import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePayStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        flex: 0,
        margin: 0,
        padding: 20,
        backgroundColor: theme.colors.primary,
      },
      buttonText: {
        fontSize: isWide ? 24 : 18,
      },
      buttonAndroidRipple: {
        color: theme.colors.onPrimary,
      },
      receiptText: {
        fontSize: isWide ? 18 : 16,
        color: theme.colors.background,
      },
      modalContainer: {
        marginHorizontal: 0,
        marginVertical: 0,
        borderRadius: 0,
        padding: 0,
      },
      pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
      pdfScale: {
        width: isWide ? 1.5 : 1,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default usePayStyle;
