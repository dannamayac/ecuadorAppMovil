import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import LoginStyles from '../../styles/LoginStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Authentication = ({ navigation }) => {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');

  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();

  const handleVerifyCode = () => {
    const fullCode = `${code1}${code2}${code3}${code4}`;
    if (fullCode === "1234") {  // Suponiendo que "1234" es el código correcto
      navigation.navigate('Main');  // Navega al Drawer que incluye Home
    } else {
      alert('Código incorrecto');  // Mostrar un mensaje de error
    }
  };

  return (
    <View style={LoginStyles.container}>
      <View style={LoginStyles.logoContainer}>
        <Image
          source={require('../../assets/Extracted_Third_Logo (1).png')}
          style={LoginStyles.logo}
        />
      </View>
      <Text style={LoginStyles.title}>Escribe el código</Text>
      <Text style={LoginStyles.subTitle}>Hemos enviado un código de 4 dígitos al número de teléfono registrado</Text>
      <View style={LoginStyles.codeContainer}>
        <TextInput
          style={LoginStyles.codeInput}
          onChangeText={(text) => { setCode1(text); ref_input2.current && ref_input2.current.focus(); }}
          value={code1}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <TextInput
          style={LoginStyles.codeInput}
          onChangeText={(text) => { setCode2(text); ref_input3.current && ref_input3.current.focus(); }}
          value={code2}
          maxLength={1}
          keyboardType="numeric"
          ref={ref_input2}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <TextInput
          style={LoginStyles.codeInput}
          onChangeText={(text) => { setCode3(text); ref_input4.current && ref_input4.current.focus(); }}
          value={code3}
          maxLength={1}
          keyboardType="numeric"
          ref={ref_input3}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <TextInput
          style={LoginStyles.codeInput}
          onChangeText={(text) => { setCode4(text); }}
          value={code4}
          maxLength={1}
          keyboardType="numeric"
          ref={ref_input4}
          returnKeyType="done"
        />
      </View>
      <TouchableOpacity style={LoginStyles.loginButton} onPress={handleVerifyCode}>
        <Text style={GlobalStyles.buttonText}>Continuar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Cambiar a recepción por correo electrónico */ }}>
        <Text style={LoginStyles.registerText}>Quiero que el código me llegue al correo electrónico</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authentication;