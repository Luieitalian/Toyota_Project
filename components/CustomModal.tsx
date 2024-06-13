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
};

const CustomModal = ({
  overridingModalStyles,
  children,
  modalVisible,
  onDismissModal,
}: CustomModalProps) => {
  const theme = useTheme();

  const [styles] = useCustomModalStyle(theme);

  return (
    <Portal>
      <Modal
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
