import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginMenu = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
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

export default LoginMenu;