import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
  },

  text: {
    color: '#FFFFFF',
    fontSize: 50
  }
});
