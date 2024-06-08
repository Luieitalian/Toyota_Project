import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, View, StatusBar, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginScreenStyle from './styles/useLoginScreenStyle';
import Version from '../components/Version';
import useNFC from '../hooks/useNFC';
import UsernameInput from '../components/UsernameInput';
import PasswordInput from '../components/PasswordInput';
import Login from '../components/Login';
import validateUser from '../utils/validateUser';
import {UsersContext} from '../contexts/UserContext/UsersContext';
import {Portal, Snackbar} from 'react-native-paper';
import nfcManager from 'react-native-nfc-manager';

const LoginScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  const passwordRef = useRef<TextInput>(null); // A Ref for password textinput component

  const {styles, theme} = useLoginScreenStyle();

  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {users, setUser} = useContext(UsersContext);

  const readNFC = useNFC();

  const focusOnPassword = () => {
    passwordRef.current?.focus();
  };

  const onLoginSubmit = async () => {
    await readNFC();
    const {user} = validateUser(username, password, users);
    if (user) {
      setUser(user);
      navigation.replace('HomeScreen');
    } else {
      setSnackbarVisible(true);
    }
  };

  const onDismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const onChangeUsername = (username: string) => {
    //readNFC();
    setUsername(username);
  };
  const onChangePassword = (password: string) => {
    setPassword(password);
  };

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
              onSubmitPassword={onLoginSubmit}
              password={password}
              onChangePassword={onChangePassword}
              passwordRef={passwordRef}
            />
            <Login onSubmit={onLoginSubmit} />
          </View>
        </View>
        <Version />
      </View>
      <Portal>
        <Snackbar
          duration={2000}
          visible={snackbarVisible}
          onDismiss={onDismissSnackbar}
        >
          {t('wrong_username_or_password')}
        </Snackbar>
      </Portal>
    </SafeAreaView>
  );
};

export default LoginScreen;
