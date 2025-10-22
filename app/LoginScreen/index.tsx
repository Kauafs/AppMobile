import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Input, SocialIcon } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LottieView from 'lottie-react-native';
import styles from './style';
import LoginButtom from './components';
import { router } from 'expo-router';


export interface LoginScreenProps {}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  senha: Yup.string().min(6, 'Mínimo 6 caracteres').required('Campo obrigatório'),
});

export function LoginScreen(props: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../anm/login.json')}
        autoPlay
        loop
        style={styles.iconLogin}
      />

      <Formik
        initialValues={{ email: '', senha: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Login realizado: ', values)
          router.push('/SelectionScreen');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Input
              placeholder="Enter with email"
              leftIcon={<MaterialIcons name="email" size={20} color="#a55eea" />}
              placeholderTextColor={'#a55eea'}
              inputStyle={{ color: 'white' }}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              errorMessage={touched.email && errors.email ? errors.email : ''}
            />

            <Input
              placeholder="Enter with senha"
              leftIcon={<MaterialIcons name="lock" size={20} color="#a55eea" />}
              inputStyle={{color:'white'}}
              placeholderTextColor="#a55eea"
              secureTextEntry
              onChangeText={handleChange('senha')}
              onBlur={handleBlur('senha')}
              value={values.senha}
              errorMessage={touched.senha && errors.senha ? errors.senha : ''}
            />
            <LoginButtom onPress={handleSubmit}/>
          </>
        )}
      </Formik>

      <Text style={styles.subTitle}>Or, login with</Text>

      <View style={styles.containSocial}>
        <SocialIcon button type="google" style={styles.socialButtom} />
        <SocialIcon button type="facebook" style={styles.socialButtom} />
        <SocialIcon button type="apple" style={styles.socialButtom} />
      </View>

      <TouchableOpacity onPress={() => router.push('/RegisterScreen')}>
        <Text style={styles.registerText}>
          New to CyberShield? <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;