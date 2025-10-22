import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './style';
import { Input } from '@rneui/themed';
import RegisterButtom from './components';
import LottieView from 'lottie-react-native';


export interface RegisterScreenProps {}

const schema = Yup.object().shape({
  name: Yup.string().required('Digite seu nome'),
  email: Yup.string().email('E-mail inválido').required('Digite seu e-mail'),
  password: Yup.string().min(8, 'Mínimo 8 caracteres').required('Digite sua senha'),
});

export function RegisterScreen(props: RegisterScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <View>
        <LottieView
                source={require('../../anm/default.json')}
                autoPlay
                loop
                style={styles.iconLogin}
              />
      </View>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log('Dados:', values);
        }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <>
            <Input
              placeholder="Enter with you name"
              placeholderTextColor={'#a55eea'}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              inputStyle={{ color: 'white' }}
            />
            {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}

            <Input
              placeholder="Enter with you name e-mail"
              placeholderTextColor={'#a55eea'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              keyboardType="email-address"
              inputStyle={{ color: 'white' }}

            />
            {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <Input
              placeholder="Enter with you password"
              placeholderTextColor={'#a55eea'}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              secureTextEntry
            />
            {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}
          </>
        )}
      </Formik>
      <RegisterButtom/>
    </View>
  );
}

export default RegisterScreen;