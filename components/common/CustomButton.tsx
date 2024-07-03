import React, {memo} from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import useCustomButtonStyle from './styles/useCustomButtonStyle';

export type CustomButtonProps = {
  children: React.ReactNode;
  overridingButtonStyles: any;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const CustomButton = ({
  overridingButtonStyles,
  onPress,
  children,
  disabled,
}: CustomButtonProps) => {
  const theme = useTheme();

  const [styles] = useCustomButtonStyle(theme);

  return (
    <Pressable
      disabled={disabled}
      android_ripple={{
        color: overridingButtonStyles.buttonAndroidRipple
          ? overridingButtonStyles.buttonAndroidRipple.color
          : styles.buttonAndroidRipple.color,
        foreground: true,
      }}
      style={[styles.buttonContainer, overridingButtonStyles.buttonContainer]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, overridingButtonStyles.buttonText]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default memo(CustomButton);
