import React from 'react';
import {ErrorContainer, ErrorText} from './styles';

interface IFieldErrorProps {
  errors: any;
}

const FieldError: React.FC<IFieldErrorProps> = ({errors}) => {
  return (
    <ErrorContainer testID="error-container">
      <ErrorText testID="error-text">{errors}</ErrorText>
    </ErrorContainer>
  );
};

export default FieldError;
