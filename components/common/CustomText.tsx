import {max_text_chars_THIN, max_text_chars_WIDE} from '@/globals/style';
import React, {memo} from 'react';
import {Text, TextProps} from 'react-native';

export interface CustomTextProps extends TextProps {}

const CustomText = (props: CustomTextProps) => {
  const {children, ...restProps} = props;

  //const {width} = useWindowDimensions();
  // const isWide = useMemo(() => width >= breakPoint, [width]);

  if (typeof children === 'string') {
    if (children.length >= max_text_chars_WIDE) {
      return (
        <Text ellipsizeMode="tail" {...restProps}>
          {children.slice(0, max_text_chars_WIDE).trimEnd() + '...'}
        </Text>
      );
    } else if (children.length >= max_text_chars_THIN) {
      return (
        <Text ellipsizeMode="tail" {...restProps}>
          {children.slice(0, max_text_chars_THIN).trimEnd() + '...'}
        </Text>
      );
    } else {
      return <Text {...restProps}>{children}</Text>;
    }
  } else {
    return <Text {...restProps}>{children}</Text>;
  }
};

export default memo(CustomText);
