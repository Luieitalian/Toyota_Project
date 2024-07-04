import React, {useContext, useRef, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import useLoginScreenStyle from './styles/useLoginScreenStyle';
import Version from '@/components/common/Version';
import useNFC from '@/hooks/useNFC';
import UsernameInput from '@/components/loginScreen/UsernameInput';
import PasswordInput from '@/components/loginScreen/PasswordInput';
import Login from '@/components/loginScreen/Login';
import validateUser from '@/utils/validateUser';
import {UsersContext} from '@/contexts/UsersContext/UsersContext';
import {Portal, Snackbar} from 'react-native-paper';
import {vibrate} from '@/utils/vibration';

const LoginScreen = ({route, navigation}: any) => {
  const {t} = useTranslation();
  const passwordRef = useRef<TextInput>(null); // A Ref for password textinput component

  const {styles, theme} = useLoginScreenStyle();

  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {users, setUser} = useContext(UsersContext);

  const focusOnPassword = () => {
    passwordRef.current?.focus();
  };

  const onLoginSubmit = async () => {
    const {user} = validateUser(username, password, users);
    if (user) {
      setUser(user.name);
      navigation.replace('HomeScreen');
    } else {
      setSnackbarVisible(true);
      vibrate(1);
    }
  };

  const onDismissSnackbar = () => {
    setSnackbarVisible(false);
  };

  const onChangeUsername = (username: string) => {
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
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
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
      </KeyboardAvoidingView>
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
