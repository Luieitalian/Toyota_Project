import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

type DebugNavigateScreenProps = {
  screen: string;
  navigation: any;
};

const DebugNavigateScreen = ({
  screen,
  navigation,
}: DebugNavigateScreenProps) => {
  return <Button onPress={() => navigation.navigate(screen)}>hello</Button>;
};

export default DebugNavigateScreen;
