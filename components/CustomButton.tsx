import React, {memo} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useCustomButtonStyle from './styles/useCustomButtonStyle';

type CustomButtonProps = {
  styles: any;
  theme: MD3Theme;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
};

const CustomButton = ({
  styles,
  theme,
  onPress,
  children,
}: CustomButtonProps) => {
  const [buttonStyles] = useCustomButtonStyle(theme);
  const overridingStyles = styles;

  return (
    <Pressable
      android_ripple={{
        color: buttonStyles.androidRipple.color,
        foreground: true,
      }}
      style={[buttonStyles.container, overridingStyles.container]}
      onPress={onPress}
    >
      <Text style={[buttonStyles.text, overridingStyles.text]}>{children}</Text>
    </Pressable>
  );
};

export default memo(CustomButton);
