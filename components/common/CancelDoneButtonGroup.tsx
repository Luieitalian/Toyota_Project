import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import useCancelDoneButtonGroupStyle from './styles/useCancelDoneButtonGroupStyle';

type CancelDoneButtonGroupProps = {
  onCancel: (x: any) => any;
  onDone: (x: any) => any;
};

const CancelDoneButtonGroup = ({
  onCancel,
  onDone,
}: CancelDoneButtonGroupProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useCancelDoneButtonGroupStyle(theme);

  return (
    <View style={styles.buttonGroup}>
      <Button
        onPress={onCancel}
        mode="elevated"
        style={styles.cancelButton}
        labelStyle={styles.cancelText}
      >
        {t('cancel')}
      </Button>
      <Button
        onPress={onDone}
        mode="elevated"
        style={styles.doneButton}
        labelStyle={styles.doneText}
      >
        {t('done')}
      </Button>
    </View>
  );
};

export default memo(CancelDoneButtonGroup);
