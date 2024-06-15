import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import useSelectedProductsListStyle from './styles/useSelectedProductsListStyle';

const SelectedProductsList = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useSelectedProductsListStyle(theme);

  return (
    <View style={styles.container}>
      <Text>SelectedProductsList</Text>
    </View>
  );
};

export default memo(SelectedProductsList);
