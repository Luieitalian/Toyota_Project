import React, {memo} from 'react';
import {GestureResponderEvent, Pressable, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import useCustomButtonStyle from './styles/useCustomButtonStyle';
import {useTranslation} from 'react-i18next';

type CustomButtonProps = {
  styles: any;
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const CustomButton = ({
  styles,
  onPress,
  children,
  disabled,
}: CustomButtonProps) => {
  const theme = useTheme();
  const {t} = useTranslation();

  const [buttonStyles] = useCustomButtonStyle(theme);
  const overridingStyles = styles;

  return (
    <Pressable
      disabled={disabled}
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
