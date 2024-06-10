import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

type useCreditCardSelectStyleArgs = {
  theme: MD3Theme;
  isCash: boolean;
};

const useCreditCardSelectStyle = ({
  theme,
  isCash,
}: useCreditCardSelectStyleArgs) => {
  const {width} = useWindowDimensions();

  const styles = React.useMemo(() => {
    const isWide = width >= breakPoint;

    return StyleSheet.create({
      container: {
        backgroundColor: isCash ? theme.colors.secondary : theme.colors.primary,
      },
      text: {},
      modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 20,
        elevation: 5,
        marginHorizontal: isWide ? 300 : 30,
        marginVertical: isWide ? 100 : 100,
        padding: isWide ? 60 : 40,
        backgroundColor: theme.colors.background,
        borderRadius: 10,
      },
      contentContainer: {
        flex: 1,
        width: '100%',
      },
      flexCol: {
        flex: 1,
        flexDirection: 'column',
        gap: 30,
      },
      dateCVVGroup: {
        gap: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    });
  }, [theme, isCash]);
  return {styles};
};

export default useCreditCardSelectStyle;
