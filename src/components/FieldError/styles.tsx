import styled from 'styled-components/native';
import appTheme from '../../theme/appTheme';

export const ErrorContainer = styled.View`
  width: 100%;
  padding-horizontal: 16px;
  padding-vertical: 8px;
  margin-left: 24px;
`;

export const ErrorText = styled.Text`
  font-size: 10px;
  color: #ff377f;
  font-family: ${appTheme.font.regular};
`;
