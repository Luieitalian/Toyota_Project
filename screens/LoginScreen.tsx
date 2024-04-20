import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  StatusBar,
  useColorScheme,
  KeyboardAvoidingView,
} from 'react-native';
import {useTheme, Icon, Menu, Divider, TextInput} from 'react-native-paper';
import {useTranslation, withTranslation} from 'react-i18next';
import {changeLanguage} from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../contexts/ThemeContext';

const LoginScreen = ({route, navigation}: any) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const [visibleLangMenu, setVisibleLangMenu] = useState(false);

  const closeLangMenu = () => setVisibleLangMenu(false);
  const openLangMenu = () => setVisibleLangMenu(true);

  const {toggleTheme} = useContext(ThemeContext);

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        view: {
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          gap: 5,
          backgroundColor: theme.colors.surfaceVariant,
        },
        wrapper: {
          flex: 1,
          marginTop: 24,
          backgroundColor: theme.colors.onSecondaryContainer,
          borderRadius: 12,
        },
        welcome: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: theme.colors.background,
        },
        welcomeView: {
          flex: 1,
          padding: 24,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        header: {
          flex: 0.07,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          gap: 10,
          paddingHorizontal: 20,
          backgroundColor: theme.colors.surfaceVariant,
        },
        changeLanguage: {
          backgroundColor: theme.colors.onBackground,
          borderRadius: 100,
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center',
        },
        menu: {
          backgroundColor: theme.colors.background,
        },
        menuItem: {
          color: theme.colors.onBackground,
        },
        divider: {
          width: '100%',
          borderWidth: 0.2,
          borderColor: theme.colors.onSurface,
        },
        icon: {
          color: theme.colors.background,
        },
        form: {
          flex: 1,
        },
        textInput: {
          backgroundColor: theme.colors.surfaceVariant,
        },
      }),
    [theme]
  );

  return (
    <SafeAreaView style={styles.view}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.surfaceVariant}
      />
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
              onPress={openLangMenu}
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
      <Divider style={styles.divider} theme={theme} bold={true} />
      <View style={styles.wrapper}>
        <View style={styles.welcomeView}>
          <Text style={styles.welcome}>{t('welcome_to_app')}</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            outlineColor={theme.colors.onSurfaceVariant}
            activeOutlineColor={theme.colors.onSurfaceVariant}
            textColor={theme.colors.primary}
            mode="outlined"
            label={t('username')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
