import React, {useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import useHeaderStyle from './styles/useHeaderStyle';
import {Icon, MD3Theme, Menu} from 'react-native-paper';
import {ThemeContext} from '../contexts/ThemeContext';
import {changeLanguage, TFunction} from 'i18next';

type HeaderProps = {
  t: TFunction<'translation', undefined>;
  theme: MD3Theme;
};

const Header = ({t, theme}: HeaderProps) => {
  const [visibleLangMenu, setVisibleLangMenu] = useState(false);
  const {toggleTheme} = useContext(ThemeContext);
  const {styles} = useHeaderStyle(theme);

  const closeLangMenu = () => setVisibleLangMenu(false);
  const openLangMenu = () => setVisibleLangMenu(true);

  return (
    <View style={styles.header}>
      <Pressable
        android_ripple={{
          color: theme.colors.onSecondary,
          radius: 22,
          foreground: true,
        }}
        style={styles.changeLanguage}
        onPress={toggleTheme}
      >
        <Icon source="theme-light-dark" color={styles.icon.color} size={25} />
      </Pressable>

      <Menu
        visible={visibleLangMenu}
        onDismiss={closeLangMenu}
        anchorPosition="bottom"
        theme={theme}
        contentStyle={styles.menu}
        anchor={
          <Pressable
            android_ripple={{
              color: theme.colors.onSecondary,
              radius: 22,
              foreground: true,
            }}
            style={styles.changeLanguage}
            onPress={() => {
              openLangMenu();
            }}
          >
            <Icon source="translate" color={styles.icon.color} size={25} />
          </Pressable>
        }
      >
        <Menu.Item
          titleStyle={styles.menuItem}
          title={t('turkish')}
          onPress={() => changeLanguage('tr')}
        />
        <Menu.Item
          titleStyle={styles.menuItem}
          title={t('english')}
          onPress={() => changeLanguage('en')}
        />
      </Menu>
    </View>
  );
};

export default Header;
