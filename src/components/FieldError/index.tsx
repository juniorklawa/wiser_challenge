import React from 'react';
import {ErrorContainer, ErrorText} from './styles';

interface IFieldErrorProps {
  errors: any;
}

const FieldError: React.FC<IFieldErrorProps> = ({errors}) => {
  return (
    <ErrorContainer>
      <ErrorText>{errors}</ErrorText>
    </ErrorContainer>
  );
};

export default FieldError;
