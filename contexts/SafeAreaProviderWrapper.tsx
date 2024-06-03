import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type SafeAreaProviderWrapperProps = {
  children: React.ReactNode;
};

const SafeAreaProviderWrapper = ({children}: SafeAreaProviderWrapperProps) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        sap: {
          backgroundColor: theme.colors.background,
        },
      }),
    []
  );
  return <SafeAreaProvider style={styles.sap}></SafeAreaProvider>;
};

export default memo(SafeAreaProviderWrapper);
