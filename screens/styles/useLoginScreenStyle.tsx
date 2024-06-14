import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {useTheme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const useLoginScreenStyle = () => {
  const theme = useTheme();
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;
    return StyleSheet.create({
      screenView: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 5,
        backgroundColor: theme.colors.background,
      },
      wrapper: {
        flex: 10,
        marginTop: 40,
        marginBottom: 100,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.onBackground,
        borderRadius: 12,
        padding: 40,
        paddingBottom: 10,
        width: '80%',
      },
      contentWrapper: {
        gap: 40,
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      welcome: {
        fontSize: isWide ? 72 : 46,
        fontFamily: 'Roboto-Regular',
        textAlign: 'center',
        color: theme.colors.background,
      },
      form: {
        gap: isWide ? 24 : 16,
      },
    });
  }, [theme, width]);
  return {styles, theme};
};

export default useLoginScreenStyle;
