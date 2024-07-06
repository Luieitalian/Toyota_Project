import React, {useEffect, useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useShowUsersStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      buttonContainer: {
        flex: 1,
        minHeight: 100,
      },
      buttonText: {
        fontSize: isWide ? 20 : 16,
      },
      modalContainer: {
        padding: 0,
        marginHorizontal: isWide ? 100 : 25,
        marginVertical: isWide ? 100 : 100,
      },
      userNameText: {
        fontSize: isWide ? 18 : 16,
      },
      dataTable: {
        flex: 1,
        borderRadius: 10,
        borderColor: theme.colors.outlineVariant,
        borderWidth: 1,
      },
      currentUserDataRow: {
        backgroundColor: theme.colors.primaryContainer,
      },
    });
  }, [theme, width]);

  return {styles};
};

export default useShowUsersStyle;
