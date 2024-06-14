import React, {memo, useContext} from 'react';
import {Text, View} from 'react-native';
import {SegmentedButtons, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import useLanguageSegButtonsStyle from './styles/useLanguageSegButtonsStyle';

const LanguageSegButtons = () => {
  const {i18n, t} = useTranslation();
  const theme = useTheme();

  const {styles} = useLanguageSegButtonsStyle(theme);

  return (
    <View>
      <SegmentedButtons
        value={i18n.language}
        onValueChange={i18n.changeLanguage}
        buttons={[
          {
            value: 'tr',
            label: t('turkish'),
          },
          {
            value: 'en',
            label: t('english'),
          },
        ]}
      />
    </View>
  );
};

export default memo(LanguageSegButtons);
