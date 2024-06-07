import React, {memo, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {
  Badge,
  Button,
  Dialog,
  Portal,
  Snackbar,
  Surface,
  useTheme,
} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useServiceInfo from '../hooks/useServiceInfo';
import CustomButton from './CustomButton';
import {UnsentCartsContext} from '../contexts/UnsentCartsContext/UnsentCartsContext';
import useSynchronizeUnsentCartsStyle from './styles/useSynchronizeUnsentCartsStyle';
import {StatusContext} from '../contexts/StatusContext/StatusContext';

const SynchronizeUnsentCarts = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const {unsentCartReceipts, setUnsentCartReceipts} =
    useContext(UnsentCartsContext);
  const {isOnline} = useContext(StatusContext);
  const {styles} = useSynchronizeUnsentCartsStyle(theme);

  const onPressDialog = () => {
    console.log('syncronize');
    if (!isOnline) {
      setIsSnackBarVisible(true);
    } else if (unsentCartReceipts.length > 0) {
      setIsDialogVisible(true);
    }
  };

  const onDismissDialog = () => {
    setUnsentCartReceipts([]);
    setIsDialogVisible(false);
  };

  const onDismissSnackbar = () => {
    setIsSnackBarVisible(false);
  };

  return (
    <View>
      <CustomButton styles={styles} onPress={onPressDialog}>
        {t('synchronize_unsent_receipts')}
      </CustomButton>
      {unsentCartReceipts.length > 0 ? (
        <Badge size={styles.badge.width} style={styles.badgeView}>
          {unsentCartReceipts.length}
        </Badge>
      ) : null}
      <Portal>
        <Dialog onDismiss={onDismissDialog} visible={isDialogVisible}>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              {t('receipts_synchronized', {
                receipts: unsentCartReceipts.length,
              })}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onDismissDialog}>
              <Text style={styles.dialogText}>OK</Text>
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
    </View>
  );
};

export default memo(SynchronizeUnsentCarts);
