/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import generateStore from './src/redux/store'

import SplashScreen from './src/components/splash/splash'

let store = generateStore()

function App() {
  return (
    <Provider store={store}>
      <SplashScreen />
    </Provider>

  )
}

export default App;
