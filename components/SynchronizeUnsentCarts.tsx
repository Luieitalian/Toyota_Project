import React, {memo, useContext, useState} from 'react';
import {View, Text} from 'react-native';
import {
  Badge,
  Button,
  Dialog,
  Portal,
  Surface,
  useTheme,
} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useServiceInfo from '../hooks/useServiceInfo';
import CustomButton from './CustomButton';
import {UnsentCartsContext} from '../contexts/UnsentCartsContext/UnsentCartsContext';
import useSynchronizeUnsentCartsStyle from './styles/useSynchronizeUnsentCartsStyle';

const SynchronizeUnsentCarts = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const {unsentCartReceipts, setUnsentCartReceipts} =
    useContext(UnsentCartsContext);
  const {styles} = useSynchronizeUnsentCartsStyle(theme);

  const onPress = () => {
    console.log('syncronize');
    if (unsentCartReceipts.length > 0) {
      setIsDialogVisible(true);
    }
  };

  const onDismiss = () => {
    setUnsentCartReceipts([]);
    setIsDialogVisible(false);
  };

  return (
    <View>
      <CustomButton styles={styles} onPress={onPress}>
        {t('synchronize_unsent_receipts')}
      </CustomButton>
      {unsentCartReceipts.length > 0 ? (
        <Badge size={styles.badge.width} style={styles.badgeView}>
          {unsentCartReceipts.length}
        </Badge>
      ) : null}
      <Portal>
        <Dialog onDismiss={onDismiss} visible={isDialogVisible}>
          <Dialog.Content>
            <Text style={styles.dialogText}>
              {t('receipts_synchronized', {
                receipts: unsentCartReceipts.length,
              })}
            </Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={onDismiss}>
              <Text style={styles.dialogText}>OK</Text>
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default memo(SynchronizeUnsentCarts);
