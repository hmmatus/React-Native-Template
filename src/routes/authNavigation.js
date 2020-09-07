import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/auth/login/login';
import Register from '../components/auth/register/register';

const Stack = createStackNavigator();

function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default Auth;
