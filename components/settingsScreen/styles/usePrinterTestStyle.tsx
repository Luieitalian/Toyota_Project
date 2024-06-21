import React from 'react';
import {Dimensions, StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePrinterTestStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      buttonContainer: {
        flex: 0,
        margin: 0,
        minHeight: 50,
      },
      buttonText: {
        fontSize: isWide ? 18 : 16,
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
      dialogTitle: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 18 : 16,
      },
      textInput: {
        minWidth: isWide ? '60%' : '100%',
        height: 60,
        fontSize: isWide ? 20 : 18,
        backgroundColor: theme.colors.onBackground,
        borderRadius: 10,
        color: theme.colors.onBackground,
        paddingHorizontal: 15,
      },
      textInputOutline: {
        borderRadius: 10,
        borderColor: theme.colors.background,
      },
      textInputActiveOutline: {
        color: theme.colors.background,
      },
      textInputText: {
        color: theme.colors.background,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default usePrinterTestStyle;
