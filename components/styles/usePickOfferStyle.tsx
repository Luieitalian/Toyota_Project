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
        marginHorizontal: isWide ? 300 : 30,
        marginVertical: isWide ? 30 : 40,
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
      title: {
        color: theme.colors.onBackground,
        fontSize: isWide ? 20 : 18,
        fontWeight: '500',
      },
    });
  }, [theme, width]);
  return {styles};
};

export default usePickOfferStyle;
