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
      buttonContainer: {
        backgroundColor: isCash ? theme.colors.secondary : theme.colors.primary,
      },
      buttonText: {},
      modalContainer: {
        marginHorizontal: isWide ? 300 : 30,
        marginVertical: isWide ? 100 : 100,
        padding: isWide ? 60 : 40,
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
      logo: {width: 100, resizeMode: 'contain', height: 100},
    });
  }, [theme, width, isCash]);
  return {styles};
};

export default useCreditCardSelectStyle;
