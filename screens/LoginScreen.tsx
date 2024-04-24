import React, {useRef} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {Divider} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginScreenStyle from './styles/useLoginScreenStyle';
import Version from '../components/Version';
import Header from '../components/Header';
import useNFC from '../hooks/useNFC';

const LoginScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const pwdRef = useRef<TextInput>(null); // A Ref for password textinput component
  const {styles, theme} = useLoginScreenStyle();

  //const NFCReader = useNFC();

  const focusOnPwd = () => {
    pwdRef.current?.focus();
  };

  const validateUserCredentials = () => {};

  return (
    <SafeAreaView style={styles.view}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <Header theme={theme} t={t} />
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
        <Version theme={theme} t={t} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
