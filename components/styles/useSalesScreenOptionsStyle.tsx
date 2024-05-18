import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';

const useSalesScreenOptionsStyle = (theme: MD3Theme, isWide: boolean) => {
  const styles = React.useMemo(() => {
    if (isWide) {
      return StyleSheet.create({
        container: {
          flex: 1,
          height: '100%',
          justifyContent: 'space-evenly',
        },
        flexRow: {
          flex: 1,
          flexDirection: 'row',
        },
        flexCol: {
          flex: 1,
          flexDirection: 'column',
        },
        flex2: {
          flex: 2,
        },
        flex3: {
          flex: 3,
        },
        flex4: {
          flex: 4,
        },
      });
    } else {
      return StyleSheet.create({
        container: {
          flex: 1,
          width: '100%',
          justifyContent: 'space-evenly',
        },
        flexRow: {
          flex: 1,
          flexDirection: 'row',
        },
        flexCol: {
          flex: 1,
          flexDirection: 'column',
        },
        flex2: {
          flex: 2,
        },
        flex3: {
          flex: 3,
        },
        flex4: {
          flex: 4,
        },
      });
    }
  }, [theme, isWide]);
  return {styles};
};

export default useSalesScreenOptionsStyle;
