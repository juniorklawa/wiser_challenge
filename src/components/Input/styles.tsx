import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';
import appTheme from '../../theme/appTheme';

interface InputProps {
  hasError: boolean;
}

export const InputContainer = styled.TextInput.attrs({
  placeholderTextColor: '#989FDB',
})`
  font-family: ${appTheme.font.regular};
  padding-vertical: 12px;
  flex: 1;
  padding-horizontal: 16px;
`;

export const ErrorIcon = styled(Icon).attrs({
  name: 'close',
  color: '#ff377f',
  size: 20,
})`
  margin-right: 16px;
`;

export const InputWrapper = styled.View<InputProps>`
  border-width: 1.5px;
  border-radius: 8px;
  width: 93%;
  flex-direction: row;
  align-items: center;
  border-color: ${({hasError}) => (hasError ? '#FF377F' : '#989FDB')};
`;
