import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

export type useFooterStyleProps = {
  theme: MD3Theme;
  isOnline: boolean;
};

const useFooterStyle = ({theme, isOnline}: useFooterStyleProps) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        maxHeight: 80,
        minHeight: 60,
        borderTopWidth: 1,
        borderTopColor: theme.colors.outlineVariant,
        backgroundColor: theme.colors.background,
      },
      menuContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      userText: {
        fontSize: isWide ? 14 : 12,
        color: theme.colors.onBackground,
      },
      shopStatusContainer: {
        flexDirection: 'row',
        gap: 10,
      },
      button: {
        margin: 10,
      },
      text: {
        color: theme.colors.onBackground,
      },
      icon: {
        color: isOnline ? 'green' : 'red',
        width: 18,
      },
    });
  }, [theme, width, isOnline]);

  return {styles};
};

export default useFooterStyle;
