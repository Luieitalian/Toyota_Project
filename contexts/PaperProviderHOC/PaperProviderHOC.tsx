import React, {memo} from 'react';
import {PaperProvider, useTheme} from 'react-native-paper';

type PaperProviderHOCProps = {
  children: React.ReactNode;
};

const PaperProviderHOC = ({children}: PaperProviderHOCProps) => {
  const theme = useTheme();
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};

export default memo(PaperProviderHOC);
