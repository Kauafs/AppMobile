import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import stylesF from './styleF';
import LottieView from 'lottie-react-native';

export function FileScreen() {
  const [modelo, setModelo] = useState('');
  const [data, setData] = useState('');

  const openGallery = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      exif: true,
    });

    if (!result.canceled) {
      const img = result.assets[0];
      setModelo(img.exif?.Model || 'Desconhecido');
      setData(img.exif?.DateTimeOriginal || 'Sem data');
    }
  };

  return (
    <ScrollView contentContainerStyle={stylesF.container} style={{flex:1, backgroundColor: '#1e1e2f'}}>
      <Text style={stylesF.title}>Extrair dados da imagem</Text>

      <LottieView
        source={require('../../../anm/scanflle.json')}
        autoPlay
        loop
        style={stylesF.anim}
      />

      <View style={{ marginTop: 20 }}>
        <Button title="Abrir galeria" onPress={openGallery} />
      </View>

      {modelo !== '' && data !== '' && (
        <View style={stylesF.infoBox}>
          <Text style={stylesF.label}>Modelo do dispositivo:</Text>
          <Text style={stylesF.value}>{modelo}</Text>
          <Text style={stylesF.label}>Data da foto:</Text>
          <Text style={stylesF.value}>{data}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default FileScreen;