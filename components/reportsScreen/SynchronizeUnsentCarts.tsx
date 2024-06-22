import React, {memo, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {
  Badge,
  Button,
  Dialog,
  Portal,
  Snackbar,
  useTheme,
} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import CustomButton from '../common/CustomButton';
import useSynchronizeUnsentCartsStyle from './styles/useSynchronizeUnsentCartsStyle';
import {StatusContext} from '@/contexts/StatusContext/StatusContext';
import {UnsentSalesContext} from '@/contexts/UnsentSalesContext/UnsentSalesContext';

const SynchronizeUnsentCarts = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const {clearUnsentSales, unsentSales} = useContext(UnsentSalesContext);
  const {isOnline} = useContext(StatusContext);

  const {styles} = useSynchronizeUnsentCartsStyle(theme);

  const onPress = () => {
    console.log('Synchronize past sales!');
    if (!isOnline) {
      setIsSnackBarVisible(true);
    } else if (unsentSales.length > 0) {
      setIsDialogVisible(true);
    }
  };

  const onDismissDialog = () => {
    clearUnsentSales();
    setIsDialogVisible(false);
  };

  const onDismissSnackbar = () => {
    setIsSnackBarVisible(false);
  };

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('synchronize_unsent_receipts')}
      </CustomButton>
      {unsentSales.length > 0 ? (
        <Badge size={styles.badge.width} style={styles.badgeView}>
          {unsentSales.length}
        </Badge>
      ) : null}
      <Portal>
        <Dialog onDismiss={onDismissDialog} visible={isDialogVisible}>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              {t('receipts_synchronized', {
                receipts: unsentSales.length,
              })}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onDismissDialog}>
              <Text style={styles.dialogText}>{t('done')}</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
        <Snackbar
          visible={isSnackBarVisible}
          onDismiss={onDismissSnackbar}
          duration={2000}
        >
          {t('shop_is_status', {status: isOnline ? t('online') : t('offline')})}
        </Snackbar>
      </Portal>
    </>
  );
};

export default memo(SynchronizeUnsentCarts);
