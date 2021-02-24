import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Avatar,
  Container,
  ProfileCard,
  SafeArea,
  SignOutButton,
  SignOutGradient,
  SignOutText,
  UserEmail,
  UserName,
} from './styles';

interface IUser {
  avatar: string;
  email: string;
  name: string;
}

interface IProfilePageProps {
  route: {
    params: {
      user: IUser;
    };
  };
}

const ProfilePage = ({route}: IProfilePageProps) => {
  const {user} = route.params;

  const navigation = useNavigation();

  const handleSignOut = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <>
      <SafeArea>
        <Container>
          <>
            <ProfileCard>
              <Avatar source={{uri: user.avatar}} />
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>

              <SignOutButton onPress={handleSignOut}>
                <SignOutGradient>
                  <SignOutText>SAIR</SignOutText>
                </SignOutGradient>
              </SignOutButton>
            </ProfileCard>
          </>
        </Container>
      </SafeArea>
    </>
  );
};

export default ProfilePage;
