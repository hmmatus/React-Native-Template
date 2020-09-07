import React from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';

function Loading() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator color="#000000" size="large" />
    </SafeAreaView>
  );
}

export default Loading;
