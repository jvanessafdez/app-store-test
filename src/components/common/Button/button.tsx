import React, { useMemo } from 'react';
import { Text, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../../assets/css/colors';
import general from '../../../assets/css/general';
import button from '../../../assets/css/button';

interface CustomButtonProps {
  text: string;
  color?: string;
  radius?: number;
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  icon?: any;
  disabled?: boolean;
  onPress?: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  color,
  radius,
  width,
  borderColor,
  icon,
  disabled,
  height,
  onPress,
}) => {
  const transparentColor = color && color + '33';

  const dynamicStyles = useMemo(() => {
    return {
      backgroundColor: color
        ? transparentColor
        : disabled
        ? colors.disableTransparent
        : borderColor
        ? '#FFFFFF'
        : colors.primary,
      borderColor: borderColor ? borderColor : 'transparent',
      borderRadius: radius ? radius : 0,
      width: width ? width : '25%',
      height: height ? height : 40,
    };
  }, [color, radius, width, borderColor, disabled, transparentColor]);

  const dynamicTextStyle = useMemo(() => {
    return {
      color: disabled ? colors.disable : color ? color : borderColor ? borderColor : '#FFFFFF',
    };
  }, [color, borderColor, disabled]);

  const content = (
    <Box style={general.rowSpace}>
      {icon && (
        <Ionicons name = {'filter'} size={18} color={'#ffffff'}/>
      )}
      <Text style={dynamicTextStyle}>{text}</Text>
    </Box>
  );

  return disabled ? (
    <Box style={[button.button, dynamicStyles]}>{content}</Box>
  ) : (
    <TouchableOpacity onPress={onPress} style={[button.button, dynamicStyles]}>
      {content}
    </TouchableOpacity>
  );
};