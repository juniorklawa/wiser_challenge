import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

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
  padding-vertical: 32px;
  margin-top: 60px;
  align-items: center;
  background-color: #faf5ff;
`;

export const WelcomeText = styled.Text`
  color: #383e71;
  font-size: 26px;
  width: 50%;
  font-family: Montserrat-Regular;
  text-align: center;
`;

export const SubtitleText = styled.Text`
  color: #989fdb;
  font-size: 13px;
  text-align: center;
  font-family: Montserrat-SemiBold;
  margin-top: 16px;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const EmailContainer = styled.View`
  width: 93%;
`;

export const PasswordContainer = styled.View`
  width: 93%;
  margin-bottom: 24px;
`;

export const FieldTitle = styled.Text`
  margin-left: 8px;
  margin-bottom: 8px;
  margin-top: 16px;
  font-family: Montserrat-Regular;
  font-size: 10px;
  color: #383e71;
`;

export const SignInButton = styled.TouchableOpacity`
  z-index: 999;
`;

export const SignInGradient = styled(LinearGradient).attrs({
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
  colors: ['#9D25B0', '#383E71'],
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
  font-family: Montserrat-Regular;
`;

export const ClickeHereContainer = styled.View`
  flex-direction: row;
`;

export const ClickText = styled.Text`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
  font-family: Montserrat-Regular;
`;

export const ClickHereButton = styled.TouchableOpacity``;

export const HereText = styled.Text`
  text-decoration-line: underline;
  margin-bottom: 8px;
  margin-left: 4px;
  font-size: 14px;
  color: #fff;
  font-family: Montserrat-Regular;
`;
