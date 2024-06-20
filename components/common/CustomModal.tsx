import React, {memo} from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';
import {Modal, Portal, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useCustomModalStyle from './styles/useCustomModalStyle';

type CustomModalProps = {
  overridingModalStyles: any;
  children: React.ReactNode;
  modalVisible: boolean;
  onDismissModal: () => void;
  dismissable?: boolean;
  dismissableBackButton?: boolean;
};

const CustomModal = ({
  overridingModalStyles,
  children,
  modalVisible,
  onDismissModal,
  dismissable = true,
  dismissableBackButton = true,
}: CustomModalProps) => {
  const theme = useTheme();

  const [styles] = useCustomModalStyle(theme);

  return (
    <Portal>
      <Modal
        dismissable={dismissable}
        dismissableBackButton={dismissableBackButton}
        visible={modalVisible}
        onDismiss={onDismissModal}
        contentContainerStyle={[
          styles.modalContainer,
          overridingModalStyles.modalContainer,
        ]}
      >
        {children}
      </Modal>
    </Portal>
  );
};

export default memo(CustomModal);
