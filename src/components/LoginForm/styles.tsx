import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import appTheme from '../../theme/appTheme';

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
  margin-top: 16px;
  position: relative;
  bottom: 45px;
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
  border-radius: 8px;
`;

export const SignInText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${appTheme.font.semiBold};
`;
