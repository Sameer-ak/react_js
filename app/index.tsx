/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simulate login logic for demonstration purposes
    if (email === 'user@example.com' && password === 'password') {
      // Navigate to the 'Home' screen on successful login
      navigation.navigate('home');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleSignup = () => {
    navigation.navigate('signup'); // Navigate to the 'Signup' screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Button title="Log In" onPress={handleLogin} />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default LoginScreen;
