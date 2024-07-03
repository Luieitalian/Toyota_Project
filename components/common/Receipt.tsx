import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme} from 'react-native-paper';
import {ScrollView, useWindowDimensions} from 'react-native';
import HTML from 'react-native-render-html';
import useReceiptStyle from './styles/useReceiptStyle';

export type ReceiptProps = {
  receipt_str: string;
};

const Receipt = ({receipt_str}: ReceiptProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {width} = useWindowDimensions();

  const {baseStyle} = useReceiptStyle(theme);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <HTML
        baseStyle={baseStyle}
        source={{html: `<pre>${receipt_str}</pre>`}}
        contentWidth={width}
      />
    </ScrollView>
  );
};

export default memo(Receipt);
