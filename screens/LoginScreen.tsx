import React, {useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginScreenStyle from './styles/useLoginScreenStyle';
import Version from '../components/Version';
import Header from '../components/Header';
import useNFC from '../hooks/useNFC';
import DebugNavigateScreen from '../components/DebugNavigateScreen';
import UsernameInput from '../components/UsernameInput';
import PasswordInput from '../components/PasswordInput';
import Login from '../components/Login';

const LoginScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  const passwordRef = useRef<TextInput>(null); // A Ref for password textinput component
  const {styles, theme} = useLoginScreenStyle();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  //const readNFC = useNFC();

  const focusOnPassword = () => {
    passwordRef.current?.focus();
  };

  const onChangeUsername = (username: string) => {
    //readNFC();
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
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.welcome}>{t('welcome_to_app')}</Text>
          <View style={styles.form}>
            <UsernameInput
              onChangeUsername={onChangeUsername}
              focusOnPassword={focusOnPassword}
              username={username}
            />
            <PasswordInput
              password={password}
              onChangePassword={onChangePassword}
              passwordRef={passwordRef}
            />
            <Login />
          </View>
        </View>
        <Version />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
