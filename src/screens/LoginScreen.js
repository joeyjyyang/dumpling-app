import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LoginMenu } from '../components'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <LoginMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9932cc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;