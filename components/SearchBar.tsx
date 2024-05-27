import React, {memo} from 'react';
import {View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import useSearchBarStyle from './styles/useSearchBarStyle';
import {useTranslation} from 'react-i18next';

type SearchBarProps = {
  text: string;
  disabled?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing: (nativeEvent: any) => void;
};

const SearchBar = ({
  text,
  disabled = false,
  onChangeText,
  onSubmitEditing,
}: SearchBarProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useSearchBarStyle(theme);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        disabled={disabled}
        style={styles.textInput}
        value={text}
        blurOnSubmit={false}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={t('search_for_product')}
        left={<TextInput.Icon icon="magnify" />}
      />
    </View>
  );
};

export default memo(SearchBar);
