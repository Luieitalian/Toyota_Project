import React, {memo, useContext, useState} from 'react';
import {Pressable, View} from 'react-native';
import useHeaderStyle from './styles/useHeaderStyle';
import {Icon, Menu, useTheme} from 'react-native-paper';
import {ThemeContext} from '@/contexts/ThemeContext/ThemeContext';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from 'i18next';

const Header = () => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();

  const [visibleLangMenu, setVisibleLangMenu] = useState(false);
  const {toggleTheme} = useContext(ThemeContext);
  const {styles} = useHeaderStyle(theme);

  const closeLangMenu = () => setVisibleLangMenu(false);
  const openLangMenu = () => setVisibleLangMenu(true);

  const onMenuItemPress = (lang: string) => {
    changeLanguage(lang);
    closeLangMenu();
  };

  return (
    <View style={styles.header}>
      <Pressable
        android_ripple={{
          color: theme.colors.background,
          radius: styles.iconSize.width,
          foreground: true,
        }}
        style={styles.changeLanguage}
        onPress={toggleTheme}
      >
        <Icon
          source="theme-light-dark"
          color={styles.icon.color}
          size={styles.iconSize.width}
        />
      </Pressable>

      <Menu
        visible={visibleLangMenu}
        onDismiss={closeLangMenu}
        anchorPosition="bottom"
        contentStyle={styles.menu}
        anchor={
          <Pressable
            android_ripple={{
              color: theme.colors.background,
              radius: styles.iconSize.width,
              foreground: true,
            }}
            style={styles.changeLanguage}
            onPress={() => {
              openLangMenu();
            }}
          >
            <Icon
              source="translate"
              color={styles.icon.color}
              size={styles.iconSize.width}
            />
          </Pressable>
        }
      >
        <Menu.Item
          titleStyle={styles.menuItem}
          title={t('turkish')}
          onPress={() => onMenuItemPress('tr')}
        />
        <Menu.Item
          titleStyle={styles.menuItem}
          title={t('english')}
          onPress={() => onMenuItemPress('en')}
        />
      </Menu>
    </View>
  );
};

export default memo(Header);
