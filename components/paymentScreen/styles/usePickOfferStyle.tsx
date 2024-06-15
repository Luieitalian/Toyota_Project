import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '@/globals/style';

const usePickOfferStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return isWide
      ? StyleSheet.create({
          buttonContainer: {
            margin: 0,
            maxHeight: 80,
            padding: 20,
          },
          buttonText: {
            fontSize: 18,
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
        })
      : StyleSheet.create({
          buttonContainer: {
            margin: 0,
            padding: 20,
          },
          buttonText: {
            fontSize: 18,
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
