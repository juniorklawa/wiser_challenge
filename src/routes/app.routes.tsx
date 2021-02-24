import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginPage from '../pages/Login';
import ProfilePage from '../pages/ProfilePage';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    initialRouteName="LoginPage"
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#130525',
      },
    }}>
    <App.Screen name="LoginPage" component={LoginPage} />
    <App.Screen name="ProfilePage" component={ProfilePage} />
  </App.Navigator>
);

export default AppRoutes;
