import React, {memo} from 'react';
import {View} from 'react-native';
import {TextInput, useTheme} from 'react-native-paper';
import useCustomSearchBarStyle from './styles/useCustomSearchBarStyle';
import {useTranslation} from 'react-i18next';

export type CustomSearchBarProps = {
  text: string | undefined;
  disabled?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing: (nativeEvent: any) => void;
  overridingSearchBarStyles: any;
  placeholder: string;
};

const CustomSearchBar = ({
  text,
  disabled = false,
  onChangeText,
  onSubmitEditing,
  overridingSearchBarStyles,
  placeholder,
}: CustomSearchBarProps) => {
  const {t} = useTranslation();
  const theme = useTheme();

  const {styles} = useCustomSearchBarStyle(theme);

  return (
    <View
      style={[
        styles.searchBarContainer,
        overridingSearchBarStyles.searchBarContainer,
      ]}
    >
      <TextInput
        disabled={disabled}
        style={[
          styles.searchBarInput,
          overridingSearchBarStyles.searchBarInput,
        ]}
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        placeholder={t(placeholder)}
        left={<TextInput.Icon icon="magnify" />}
      />
    </View>
  );
};

export default memo(CustomSearchBar);
