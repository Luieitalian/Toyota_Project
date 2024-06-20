import React, {memo} from 'react';
import {useTheme} from 'react-native-paper';
import CustomButton from '@/components/common/CustomButton';
import {useTranslation} from 'react-i18next';
import useCancelDocumentStyle from './styles/useCancelDocumentStyle';

type CancelDocumentProps = {
  onCancelDocument: () => void;
};

const CancelDocument = ({onCancelDocument}: CancelDocumentProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useCancelDocumentStyle(theme);

  const onPress = () => {
    console.log('Cancel Document');
    onCancelDocument();
  };

  return (
    <CustomButton onPress={onPress} overridingButtonStyles={styles}>
      {t('cancel_document')}
    </CustomButton>
  );
};

export default memo(CancelDocument);
