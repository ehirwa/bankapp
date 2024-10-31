import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import generateRandomPassword from '../utils/PasswordGenerator';

type RootStackParamList = {
  Login: undefined;
  Flag: undefined;
};

type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dynamicPassword, setDynamicPassword] = useState('');

  const hardcodedEmail = 'user@example.com';

  useEffect(() => {
    setDynamicPassword(generateRandomPassword());
  }, []);

  const handleLogin = () => {
    if (email === hardcodedEmail && password === dynamicPassword) {
      navigation.navigate('Flag');
    } else {
      Alert.alert('Error', 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bank App Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Text style={styles.hint}>Dynamic Password: {dynamicPassword}</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  hint: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
