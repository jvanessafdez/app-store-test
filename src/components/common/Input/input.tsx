import React from 'react';
import { Box, Input } from 'native-base';
import { Dimensions } from 'react-native';
import { Controller, Control, FieldValues } from 'react-hook-form';
import { colors } from '../../../assets/css/colors'

interface InputProps {
    isMultiline?: boolean;
    isNumeric?:boolean;
    width?: number;
    control: Control<FieldValues>;
    name: string;
    // rules: any;
}

export const CustomInput: React.FC<InputProps> = ({
  isMultiline,
  isNumeric,
  width,
  control,
  name,
  // rules
}) => {
    const widthW = Dimensions.get('window').width

  return (
      <Box>
        <Controller
          control={control}
          name={name}
          // rules={rules}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              mt={2}
              mb={5}
              w={width && widthW * width}
              bg={colors.borderInputTransparent}
              placeholder="Escribe algo..."
              multiline={isMultiline}
              textAlignVertical="top"
              h={isMultiline ? 200 : 50}
              keyboardType={isNumeric ? 'numeric' : 'default'}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </Box>
  );
};