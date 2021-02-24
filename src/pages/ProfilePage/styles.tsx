import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import appTheme from '../../theme/appTheme';

export const Container = styled.ImageBackground.attrs({
  source: require('../../assets/background.png'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProfileCard = styled.View`
  width: 85%;
  border-radius: 8px;
  padding-horizontal: 16px;
  padding-top: 16px;
  padding-bottom: 48px;
  margin-top: 78px;
  align-items: center;
  background-color: ${appTheme.color.card};
`;

export const UserName = styled.Text`
  color: ${appTheme.color.mediumPurple};
  font-size: 26px;
  font-family: ${appTheme.font.regular};
  text-align: center;
`;

export const UserEmail = styled.Text`
  color: ${appTheme.color.mediumPurple};
  font-size: 16px;
  font-family: ${appTheme.font.regular};
  text-align: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  z-index: 5;
  margin-top: 16px;
`;

export const SignOutGradient = styled(LinearGradient).attrs({
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

export const SignOutText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${appTheme.font.semiBold};
`;

export const Avatar = styled.Image`
  height: 128px;
  width: 128px;
  border-radius: 64px;
`;
