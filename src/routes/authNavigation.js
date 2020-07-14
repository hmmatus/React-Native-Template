import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../components/auth/login/login'

const Stack = createStackNavigator();

function Auth(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/> 
        </Stack.Navigator>
    )
}

export default Auth