import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type SafeAreaProviderHOCProps = {
  children: React.ReactNode;
};

const SafeAreaProviderHOC = ({children}: SafeAreaProviderHOCProps) => {
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

export default memo(SafeAreaProviderHOC);
