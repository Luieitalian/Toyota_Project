import React from 'react';
import {useWindowDimensions} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import {breakPoint} from '../../globals/style';

const useReceiptStyle = (theme: MD3Theme) => {
  const {width} = useWindowDimensions();
  const isWide = width >= breakPoint;

  const baseStyle = React.useMemo(() => {
    return {
      fontSize: isWide ? 15 : 11,
      color: 'black',
    };
  }, [theme, isWide]);

  return {baseStyle};
};

export default useReceiptStyle;
