import {useFormikContext} from 'formik';
import React from 'react';
import {KeyboardTypeOptions} from 'react-native';
import FieldError from '../FieldError';
import {InputContainer, ErrorIcon, InputWrapper} from './styles';

interface IInputProps {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<IInputProps> = ({
  name,
  keyboardType,
  placeholder,
  secureTextEntry = false,
}) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext<any>();

  return (
    <>
      <InputWrapper hasError={!!errors[name] && !!touched[name]}>
        <InputContainer
          autoCapitalize="none"
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          keyboardType={keyboardType}
          value={values[name]}
          onBlur={() => setFieldTouched(name)}
          onChangeText={(text) => setFieldValue(name, text)}
        />
        {!!errors[name] && touched[name] && <ErrorIcon />}
      </InputWrapper>

      {errors[name] && touched[name] && <FieldError errors={errors[name]} />}
    </>
  );
};

export default Input;
