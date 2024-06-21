import React, {useContext, useState} from 'react';
import CustomButton from '../common/CustomButton';
import {useTranslation} from 'react-i18next';
import {DataTable, useTheme} from 'react-native-paper';
import useShowUsersStyle from './styles/useShowUsersStyle';
import CustomModal from '../common/CustomModal';
import {UsersContext} from '@/contexts/UsersContext/UsersContext';
import {FlatList, ListRenderItemInfo} from 'react-native';
import {UserModel} from '@/models/UserModel';

const ShowUsers = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const {styles} = useShowUsersStyle(theme);

  const {users, user} = useContext(UsersContext);

  const onPress = () => {
    console.log('show users');
    onModal();
  };

  const onModalDismiss = () => {
    setModalVisible(false);
  };

  const onModal = () => {
    setModalVisible(true);
  };

  const renderItem = ({item}: ListRenderItemInfo<UserModel>) => {
    if (item.name === user) {
      return (
        <DataTable.Row style={styles.currentUserDataRow}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
        </DataTable.Row>
      );
    } else {
      return (
        <DataTable.Row>
          <DataTable.Cell>{item.name}</DataTable.Cell>
        </DataTable.Row>
      );
    }
  };

  const keyExtractor = (item: UserModel, index: number) => index.toString();

  return (
    <>
      <CustomButton overridingButtonStyles={styles} onPress={onPress}>
        {t('show_users')}
      </CustomButton>
      <CustomModal
        modalVisible={modalVisible}
        onDismissModal={onModalDismiss}
        overridingModalStyles={styles}
      >
        <DataTable style={styles.dataTable}>
          <DataTable.Header>
            <DataTable.Title>{t('username')}</DataTable.Title>
          </DataTable.Header>

          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </DataTable>
      </CustomModal>
    </>
  );
};

export default ShowUsers;
