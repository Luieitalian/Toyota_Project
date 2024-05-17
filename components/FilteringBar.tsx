import React, {memo, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import useFilteringBarStyle from './styles/useFilteringBarStyle';
import {Icon, MD3Theme, Menu} from 'react-native-paper';
import {changeLanguage, TFunction} from 'i18next';

const Categories = [
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

const CategoryIcons: {[char: string]: string} = {
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
  disabled?: boolean;
  onChangeCategory: (category: string) => void;
};

const FilteringBar = ({
  t,
  theme,
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
      <Menu
        visible={visibleCategoryMenu}
        onDismiss={closeCategoryMenu}
        anchorPosition="bottom"
        theme={theme}
        contentStyle={styles.categoryMenu}
        anchor={
          <Pressable
            disabled={disabled}
            android_ripple={{
              color: theme.colors.background,
              radius: styles.icon.width,
              foreground: true,
            }}
            onPress={openCategoryMenu}
          >
            <Icon
              color={disabled ? styles.disabledIcon.color : styles.icon.color}
              size={styles.icon.width}
              source="tune"
            />
          </Pressable>
        }
      >
        {Categories.map((category, index) => (
          <Menu.Item
            disabled={disabled}
            leadingIcon={CategoryIcons[category]}
            key={index}
            titleStyle={styles.menuItem}
            title={t(`${category}`)}
            onPress={() => onChangeCategoryMiddleWare(category)}
          />
        ))}
      </Menu>
    </View>
  );
};

export default memo(FilteringBar);
