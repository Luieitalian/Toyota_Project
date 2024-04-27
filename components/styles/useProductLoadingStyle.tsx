import {MD3Theme} from 'react-native-paper';
import React from 'react';
import {StyleSheet} from 'react-native';

const useProductLoadingStyle = (theme: MD3Theme) => {
  const styles = React.useMemo(
    () =>
      StyleSheet.create({
        productLoadingContainer: {
          padding: 8,
          minHeight: 50,
          maxHeight: 50,
          width: '30%',
          backgroundColor: 'white',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 5,
          borderRadius: 5,
          borderWidth: 2,
          borderColor: 'black',
        },
      }),
    [theme]
  );
  return {styles};
};

export default useProductLoadingStyle;
