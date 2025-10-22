import React from 'react';
import { View, Text, Pressable } from 'react-native';
import style from './style';
import { router } from 'expo-router';

interface Props{
  onPress: () => void;
}

const LoginButtom = ({onPress} : Props) => {
  return (
    <Pressable onPress={ onPress }>
      <View style={style.button}>
        <Text style={style.buttonText}>Login</Text>
      </View>
    </Pressable>
  );
};

export default LoginButtom;