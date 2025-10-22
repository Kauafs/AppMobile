import React from 'react';
import { View, Text, Pressable } from 'react-native';
import style from './style';
import { router } from 'expo-router';

const RegisterButtom = () => {
  return (
    <Pressable onPress={() => router.push('/LoginScreen')}>
      <View style={style.button}>
        <Text style={style.buttonText}>Register</Text>
      </View>
    </Pressable>
  );
};

export default RegisterButtom;
