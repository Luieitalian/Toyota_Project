import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const usePickOfferStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {},
      text: {},
      modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        elevation: 5,
        marginHorizontal: isWide ? 300 : 60,
        marginVertical: isWide ? 30 : 60,
        padding: 20,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
      },
      offersContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 30,
        padding: 10,
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
      title: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 18,
        fontWeight: '500',
      },
      warningText: {
        color: theme.colors.outlineVariant,
        fontSize: isWide ? 20 : 16,
      },
      doneText: {
        color: theme.colors.onPrimary,
        fontSize: isWide ? 18 : 16,
      },
      snackbar: {padding: 10, zIndex: 2, elevation: 2},
      buttonGroup: {
        flex: 1,
        minHeight: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
    });
  }, [theme]);
  return {styles};
};

export default usePickOfferStyle;
