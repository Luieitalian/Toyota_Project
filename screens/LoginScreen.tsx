import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  StatusBar,
  TextInput,
} from 'react-native';
import {useTheme, Icon, Menu, Divider} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../contexts/ThemeContext';
import axios from 'axios';

const LoginScreen = ({route, navigation}: any) => {
  const theme = useTheme();
  const {t, i18n} = useTranslation();
  const [visibleLangMenu, setVisibleLangMenu] = useState(false);
  const [version, setVersion] = useState<string>('[unknown]');
  const pwdRef = useRef<TextInput>(null); // A Ref for password textinput component

  useEffect(() => {
    const getVersion = () => {
      axios
        .get('http://10.0.2.2:3000/version') // 10.0.0.2 Special alias to the host loopback interface
        .then((res) => {
          setVersion(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getVersion();
  }, []);

  const closeLangMenu = () => setVisibleLangMenu(false);
  const openLangMenu = () => setVisibleLangMenu(true);
  const focusOnPwd = () => {
    pwdRef.current?.focus();
  };

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
          marginBottom: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: theme.colors.onSecondaryContainer,
          borderRadius: 12,
          padding: 40,
          paddingBottom: 10,
          width: '80%',
        },
        contentWrapper: {
          flex: 0.6,
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        welcome: {
          fontSize: 40,
          fontFamily: 'Roboto-Light',
          textAlign: 'center',
          color: theme.colors.background,
        },
        header: {
          flex: 0.08,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: '100%',
          gap: 20,
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
          gap: 10,
        },
        textInput: {
          minWidth: '100%',
          backgroundColor: theme.colors.surfaceVariant,
          borderRadius: 10,
          color: theme.colors.onSurfaceVariant,
          paddingHorizontal: 15,
        },
        footer: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        version: {
          color: theme.colors.surfaceVariant,
          fontFamily: 'Roboto-Medium',
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
        <View style={styles.contentWrapper}>
          <View>
            <Text style={styles.welcome}>{t('welcome_to_app')}</Text>
          </View>
          <View style={styles.form}>
            <TextInput
              placeholderTextColor={theme.colors.onSurfaceVariant}
              autoCorrect={false}
              inputMode="text"
              onSubmitEditing={focusOnPwd}
              style={styles.textInput}
              placeholder={t('username')}
            />
            <TextInput
              ref={pwdRef}
              secureTextEntry={true}
              placeholderTextColor={theme.colors.onSurfaceVariant}
              autoCorrect={false}
              inputMode="text"
              style={styles.textInput}
              placeholder={t('password')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.version}>{`${t('version')} ${version}`}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
