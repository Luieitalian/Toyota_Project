import React, {memo} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from 'react-native';
import {MD3Theme} from 'react-native-paper';
import useCustomButtonStyle from './styles/useCustomButtonStyle';

type CustomButtonProps = {
  styles: any;
  theme: MD3Theme;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const CustomButton = ({
  styles,
  theme,
  onPress,
  children,
  disabled,
}: CustomButtonProps) => {
  const [buttonStyles] = useCustomButtonStyle(theme);
  const overridingStyles = styles;

  return (
    <Pressable
      disabled={disabled}
      android_ripple={{
        color: buttonStyles.androidRipple.color,
        foreground: true,
        borderless: true,
      }}
      style={[buttonStyles.container, overridingStyles.container]}
      onPress={onPress}
    >
      <Text style={[buttonStyles.text, overridingStyles.text]}>{children}</Text>
    </Pressable>
  );
};

export default memo(CustomButton);
