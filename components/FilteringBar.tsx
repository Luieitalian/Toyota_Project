import React, {memo, useState} from 'react';
import {ScrollView, View} from 'react-native';
import useFilteringBarStyle from './styles/useFilteringBarStyle';
import {SegmentedButtons, useTheme} from 'react-native-paper';
import {useTranslation} from 'react-i18next';

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
  category: string | undefined;
  disabled?: boolean;
  onChangeCategory: (category: string) => void;
};

const FilteringBar = ({
  category,
  disabled = false,
  onChangeCategory,
}: FilteringBarProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

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
