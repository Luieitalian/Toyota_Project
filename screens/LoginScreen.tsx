import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, View, Pressable, StatusBar, TextInput} from 'react-native';
import {Icon, Menu, Divider} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {changeLanguage} from 'i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../contexts/ThemeContext';
import useLoginScreenStyle from './styles/LoginScreenStyle';
import axios from 'axios';
import useNFC from '../hooks/useNFC';

const LoginScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const [visibleLangMenu, setVisibleLangMenu] = useState(false);
  const [version, setVersion] = useState<string>('[unknown]');
  const pwdRef = useRef<TextInput>(null); // A Ref for password textinput component
  //const NFCReader = useNFC();
  const {toggleTheme} = useContext(ThemeContext);
  const {styles, theme} = useLoginScreenStyle();

  useEffect(() => {
    const getVersion = () => {
      axios
        .get('http://10.0.2.2:3000/version') // 10.0.2.2 Special alias to the host loopback interface
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

  const validateUserCredentials = () => {};

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
              onPress={() => {
                openLangMenu();
                //NFCReader();
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
