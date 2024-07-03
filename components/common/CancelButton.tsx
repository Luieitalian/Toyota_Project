import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, useTheme} from 'react-native-paper';
import useCancelButtonStyle from './styles/useCancelButtonStyle';

export type CancelButtonProps = {
  onCancel: (x: any) => any;
};

const CancelButton = ({onCancel}: CancelButtonProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useCancelButtonStyle(theme);

  return (
    <Button
      onPress={onCancel}
      mode="elevated"
      style={styles.cancelButton}
      labelStyle={styles.cancelText}
    >
      {t('cancel')}
    </Button>
  );
};

export default memo(CancelButton);
