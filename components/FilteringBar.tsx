import React, {memo, useState} from 'react';
import {ScrollView, View} from 'react-native';
import useFilteringBarStyle from './styles/useFilteringBarStyle';
import {SegmentedButtons, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Categories, CategoryIcons} from '@/globals/categories';

type FilteringBarProps = {
  category: string | undefined;
  onChangeCategory: (category: string) => void;
};

const FilteringBar = ({category, onChangeCategory}: FilteringBarProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const {styles} = useFilteringBarStyle(theme);

  const onChangeCategoryMiddleWare = (category: string) => {
    onChangeCategory(category);
  };

  return (
    <View style={styles.filteringBarContainer}>
      <ScrollView horizontal={true}>
        <SegmentedButtons
          multiSelect={false}
          onValueChange={onChangeCategoryMiddleWare}
          value={category ? category : 'favorites'}
          buttons={[
            ...Categories.map((cat: string) => ({
              value: cat,
              label: t(cat),
              icon: CategoryIcons[cat],
              style: {height: 40},
            })),
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default memo(FilteringBar);
