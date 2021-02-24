import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import appTheme from '../../theme/appTheme';

interface InputProps {
  hasError: boolean;
}

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/background.png'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoginCard = styled.View`
  width: 85%;
  border-radius: 8px;
  padding-horizontal: 16px;
  padding-top: 16px;
  padding-bottom: 48px;
  margin-top: 78px;
  align-items: center;
  background-color: ${appTheme.color.card};
`;

export const WelcomeText = styled.Text`
  color: ${appTheme.color.mediumPurple};
  font-size: 26px;
  width: 55%;
  font-family: ${appTheme.font.regular};
  text-align: center;
`;

export const SubtitleText = styled.Text`
  color: ${appTheme.color.lightPurple};
  font-size: 13px;
  text-align: center;
  font-family: ${appTheme.font.semiBold};
  margin-top: 16px;
`;

export const FieldTitle = styled.Text`
  margin-left: 24px;
  margin-bottom: 8px;
  margin-top: 16px;
  font-family: ${appTheme.font.regular};
  font-size: 10px;
  align-self: flex-start;
  color: ${appTheme.color.mediumPurple};
`;

export const SignInButton = styled.TouchableOpacity`
  z-index: 5;
  margin-top: 16px;
`;

export const SignInGradient = styled(LinearGradient).attrs({
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
  colors: [appTheme.color.purple, appTheme.color.mediumPurple],
})`
  height: 55px;
  width: 180px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -30px;
  border-radius: 8px;
`;

export const ForgotPassword = styled.Text`
  margin-left: 8px;
  margin-bottom: 8px;
  margin-top: 16px;
  font-size: 14px;
  color: #fff;
  font-family: ${appTheme.font.regular};
`;

export const ClickHereContainer = styled.View`
  flex-direction: row;
`;

export const ClickText = styled.Text`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-family: ${appTheme.font.regular};
`;

export const ClickHereButton = styled.TouchableOpacity``;

export const HereText = styled.Text`
  text-decoration-line: underline;
  margin-bottom: 8px;
  margin-left: 4px;
  font-size: 14px;
  color: #fff;
  font-family: ${appTheme.font.regular};
`;

export const SignInText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${appTheme.font.semiBold};
`;

export const InputWrapper = styled.View<InputProps>`
  border-width: 1.5px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  border-color: ${({hasError}) => (hasError ? '#FF377F' : '#989FDB')};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;
