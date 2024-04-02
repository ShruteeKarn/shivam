import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const LoginPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'purple' }}>Login!</Text>
      <TouchableOpacity onPress={() => alert('Sign Up')}>
        <Text style={{ color: 'blue' }}>Don't Have An Account? Sign Up</Text>
      </TouchableOpacity>
      <Button title="Connect With Google" onPress={() => alert('Google')} />
      <Button title="Connect With Facebook" onPress={() => alert('Facebook')} />
      <Text>OR</Text>
      <TextInput placeholder="Enter Your Email" style={{ borderWidth: 1, width: '80%', margin: 10 }} />
      <TextInput placeholder="Enter Your Password" secureTextEntry={true} style={{ borderWidth: 1, width: '80%', margin: 10 }} />
      <TouchableOpacity onPress={() => alert('Forgot Password')}>
        <Text style={{ color: 'blue' }}>Forgot Your Password?</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => alert('Login')} color="purple" />
    </View>
  );
};

export default LoginPage;
