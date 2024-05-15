// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LoginStyles from '../../styles/LoginStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    navigation.navigate('Authentication');
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
