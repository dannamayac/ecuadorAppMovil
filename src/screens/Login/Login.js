import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import LoginStyles from '../../styles/LoginStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { REACT_APP_API_BASE_URL, REACT_APP_LOGIN_ENDPOINT } from '@env';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_LOGIN_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      const result = await response.json();
      if (result.status === 200) {
        Alert.alert('Éxito', result.message);
        navigation.navigate('Authentication');
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Ha ocurrido un error al iniciar sesión');
    }
  };

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.logoContainer}>
        <Image
          source={require('../../assets/Group 239046.png')}
          style={LoginStyles.logo}
        />
      </View>
      <Text style={LoginStyles.title}>Hola, bienvenido al ingreso</Text>
      <Text style={LoginStyles.subTitle}>Usuario</Text>
      <TextInput
        style={LoginStyles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Usuario"
      />
      <Text style={LoginStyles.subTitle}>Contraseña</Text>
      <TextInput
        style={LoginStyles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
        placeholder="Contraseña"
      />
      <TouchableOpacity style={LoginStyles.loginButton} onPress={handleLoginPress}>
        <Text style={GlobalStyles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Navegar a registro */}}>
        <Text style={LoginStyles.registerText}>¿Aún no tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
