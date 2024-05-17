import React, {memo} from 'react';
import {View} from 'react-native';
import {TFunction} from 'i18next';
import {Icon, MD3Theme, TextInput} from 'react-native-paper';
import useSearchBarStyle from './styles/useSearchBarStyle';

type SearchBarProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  text: string;
  disabled?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing: (nativeEvent: any) => void;
};

const SearchBar = ({
  t,
  theme,
  text,
  disabled = false,
  onChangeText,
  onSubmitEditing,
}: SearchBarProps) => {
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
