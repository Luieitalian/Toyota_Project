import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginScreenStyle from './styles/useLoginScreenStyle';
import Version from '../components/Version';
import Header from '../components/Header';
import useNFC from '../hooks/useNFC';
import DebugNavigateScreen from '../components/DebugNavigateScreen';

const LoginScreen = ({route, navigation}: any) => {
  const {t, i18n} = useTranslation();
  const pwdRef = useRef<TextInput>(null); // A Ref for password textinput component
  const {styles, theme} = useLoginScreenStyle();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //const NFCReader = useNFC();

  const focusOnPwd = () => {
    pwdRef.current?.focus();
  };

  const onChangeUsername = (username: string) => {
    setUsername(username);
  };
  const onChangePassword = (password: string) => {
    setPassword(password);
  };

  const validateUserCredentials = () => {};

  return (
    <SafeAreaView style={styles.screenView}>
      <StatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <Header theme={theme} t={t} />
      <DebugNavigateScreen navigation={navigation} screen={'SalesScreen'} />
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.welcome}>{t('welcome_to_app')}</Text>
          <View style={styles.form}>
            <TextInput // username
              autoCapitalize="none"
              onSubmitEditing={focusOnPwd}
              placeholderTextColor={theme.colors.onSurfaceVariant}
              autoCorrect={false}
              inputMode="text"
              value={username}
              onChangeText={onChangeUsername}
              style={styles.textInput}
              placeholder={t('username')}
            />
            <TextInput // password
              ref={pwdRef}
              secureTextEntry={true}
              placeholderTextColor={theme.colors.onSurfaceVariant}
              autoCorrect={false}
              inputMode="text"
              value={password}
              onChangeText={onChangePassword}
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
