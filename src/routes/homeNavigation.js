import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeComponent from '../components/home/home/home'

const Stack = createStackNavigator();

function Home(){
    return (
        <Stack.Navigator>
             <Stack.Screen name='Login' component={HomeComponent}/> 
        </Stack.Navigator>
    )
}

export default Home