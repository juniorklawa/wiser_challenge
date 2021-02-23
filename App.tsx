import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          source={require('./src/assets/background.png')}>
          <View
            style={{
              width: '85%',
              borderRadius: 8,
              paddingHorizontal: 16,
              paddingVertical: 32,
              marginTop: 60,
              alignItems: 'center',
              backgroundColor: '#FAF5FF',
            }}>
            <Text
              style={{
                color: '#383E71',
                fontSize: 26,
                width: '50%',
                fontFamily: 'Montserrat-Regular',
                textAlign: 'center',
              }}>
              Olá, seja bem-vindo!
            </Text>

            <Text
              style={{
                color: '#989FDB',
                fontSize: 13,
                textAlign: 'center',
                fontFamily: 'Montserrat-SemiBold',
                marginTop: 16,
              }}>
              Para acessar a plataforma, faça seu login.
            </Text>

            <View
              style={{
                width: '93%',
              }}>
              <Text
                style={{
                  marginLeft: 8,
                  marginBottom: 8,
                  marginTop: 16,
                  fontFamily: 'Montserrat-Regular',

                  fontSize: 10,
                  color: '#383E71',
                }}>
                E-MAIL
              </Text>

              <TextInput
                style={{
                  borderColor: '#989FDB',
                  borderWidth: 1.5,
                  borderRadius: 8,
                  fontFamily: 'Montserrat-Regular',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
                placeholderTextColor="#989FDB"
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="user.name@mail.com"
              />
            </View>

            <View
              style={{
                width: '93%',
                marginBottom: 24,
              }}>
              <Text
                style={{
                  marginLeft: 8,
                  marginBottom: 8,
                  marginTop: 16,
                  fontSize: 10,
                  color: '#383E71',
                  fontFamily: 'Montserrat-Regular',
                }}>
                SENHA
              </Text>

              <TextInput
                style={{
                  borderColor: '#989FDB',
                  borderWidth: 1.5,
                  borderRadius: 8,
                  fontFamily: 'Montserrat-Regular',
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
                secureTextEntry
                placeholderTextColor="#989FDB"
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="********"
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => console.log('oi')} style={{}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                height: 55,
                width: 180,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                top: -30,
                borderRadius: 8,
                zIndex: 1,
              }}
              colors={['#9D25B0', '#383E71']}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontFamily: 'Montserrat-SemiBold',
                }}>
                ENTRAR
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 8,
              marginBottom: 8,
              marginTop: 16,
              fontSize: 14,
              color: '#fff',
              fontFamily: 'Montserrat-Regular',
            }}>
            Esqueceu seu login ou senha?
          </Text>

          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                marginBottom: 8,
                fontSize: 14,
                color: '#fff',
                fontFamily: 'Montserrat-Regular',
              }}>
              Clique
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: 'underline',
                  marginBottom: 8,
                  marginLeft: 4,
                  fontSize: 14,
                  color: '#fff',
                  fontFamily: 'Montserrat-Regular',
                }}>
                aqui
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default App;
