import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type SafeAreaProviderWrapperProps = {
  children: React.ReactNode;
};

const SafeAreaProviderWrapper = ({children}: SafeAreaProviderWrapperProps) => {
  const theme = useTheme();

  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        SafeAreaProvider: {
          backgroundColor: theme.colors.background,
        },
      }),
    [theme]
  );

  return (
    <SafeAreaProvider style={styles.SafeAreaProvider}>
      {children}
    </SafeAreaProvider>
  );
};

export default memo(SafeAreaProviderWrapper);
