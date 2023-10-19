/* eslint-disable prettier/prettier */
// Signup.tsx
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
import { StackScreenProps } from '@react-navigation/stack';

type SignupScreenProps = StackScreenProps<any, 'signup'>;

function SignupScreen({ navigation }: SignupScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = () => {
    // Simulate signup logic for demonstration purposes
    if (email && password) {
      // If signup is successful, you can navigate to another screen (e.g., 'index.tsx')
      navigation.navigate('index');
    } else {
      setSuccessMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.content}>
        <Text style={styles.title}>Sign Up</Text>
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
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
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
  successMessage: {
    color: 'green',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default SignupScreen;
