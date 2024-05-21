import React, {memo, useContext, useState} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import useFilteringBarStyle from './styles/useFilteringBarStyle';
import {Icon, MD3Theme, Menu, SegmentedButtons} from 'react-native-paper';
import {changeLanguage, TFunction} from 'i18next';

const ButtonCategories = [
  'show_all',
  'favorites',
  'et_balik',
  'dondurma',
  'ev_yasam',
  'firindan',
  'fit_form',
  'kahvalti',
  'meyve_sebze',
  'su_icecek',
  'sut_urunleri',
  'teknoloji',
];

const ButtonCategoryIcons: {[char: string]: string} = {
  show_all: 'view-headline',
  favorites: 'star',
  et_balik: 'food-drumstick',
  dondurma: 'ice-cream',
  ev_yasam: 'home',
  firindan: 'baguette',
  fit_form: 'basketball',
  kahvalti: 'egg-fried',
  meyve_sebze: 'fruit-watermelon',
  su_icecek: 'liquor',
  sut_urunleri: 'cow',
  teknoloji: 'lightning-bolt',
};

type FilteringBarProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
  category: string | undefined;
  disabled?: boolean;
  onChangeCategory: (category: string) => void;
};

const FilteringBar = ({
  t,
  theme,
  category,
  disabled = false,
  onChangeCategory,
}: FilteringBarProps) => {
  const {styles} = useFilteringBarStyle(theme);
  const [visibleCategoryMenu, setVisibleCategoryMenu] =
    useState<boolean>(false);

  const closeCategoryMenu = () => setVisibleCategoryMenu(false);
  const openCategoryMenu = () => setVisibleCategoryMenu(true);

  const onChangeCategoryMiddleWare = (category: string) => {
    onChangeCategory(category);
    closeCategoryMenu();
  };

  return (
    <View style={styles.filteringBarContainer}>
      <ScrollView horizontal={true}>
        <SegmentedButtons
          multiSelect={false}
          theme={theme}
          onValueChange={onChangeCategoryMiddleWare}
          value={category ? category : 'favorites'}
          buttons={[
            ...ButtonCategories.map((cat: string) => ({
              value: cat,
              label: t(cat),
              icon: ButtonCategoryIcons[cat],
              style: {height: 40},
            })),
          ]}
        />
      </ScrollView>
    </View>
  );
};

export default memo(FilteringBar);
