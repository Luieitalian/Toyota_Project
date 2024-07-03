import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, useTheme} from 'react-native-paper';
import useDoneButtonStyle from './styles/useDoneButtonStyle';

export type DoneButtonProps = {
  onDone: (x: any) => any;
};

const DoneButton = ({onDone}: DoneButtonProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useDoneButtonStyle(theme);

  return (
    <Button
      onPress={onDone}
      mode="elevated"
      style={styles.doneButton}
      labelStyle={styles.doneText}
    >
      {t('done')}
    </Button>
  );
};

export default memo(DoneButton);
