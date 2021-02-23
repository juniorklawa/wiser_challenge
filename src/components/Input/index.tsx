import React from 'react';
import {InputContainer} from './styles';

interface IInputProps {
  fieldValue: string;
  setFieldValue: (value: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<IInputProps> = ({
  fieldValue,
  setFieldValue,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <InputContainer
      secureTextEntry={secureTextEntry}
      onChangeText={(text) => setFieldValue(text)}
      placeholder={placeholder}
      value={fieldValue}
    />
  );
};

export default Input;
