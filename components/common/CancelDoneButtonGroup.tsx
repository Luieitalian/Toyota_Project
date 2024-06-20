import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import useCancelDoneButtonGroupStyle from './styles/useCancelDoneButtonGroupStyle';
import CancelButton from './CancelButton';
import DoneButton from './DoneButton';

type CancelDoneButtonGroupProps = {
  onCancel: (x: any) => any;
  onDone: (x: any) => any;
};

const CancelDoneButtonGroup = ({
  onCancel,
  onDone,
}: CancelDoneButtonGroupProps) => {
  const theme = useTheme();

  const {styles} = useCancelDoneButtonGroupStyle(theme);

  return (
    <View style={styles.buttonGroup}>
      <CancelButton onCancel={onCancel} />
      <DoneButton onDone={onDone} />
    </View>
  );
};

export default memo(CancelDoneButtonGroup);
