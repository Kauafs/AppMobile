import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import stylesD from './styleD';

export function DiscoverScreen() {
  const eventos = [
    {
      id: '1',
      ano: '2000',
      titulo: 'Ataques DDoS',
      descricao: 'Sites como Yahoo e CNN ficaram fora do ar após ataques de negação de serviço.',
    },
    {
      id: '2',
      ano: '2010',
      titulo: 'Stuxnet',
      descricao: 'Malware que sabotou instalações nucleares no Irã, usado para espionagem industrial.',
    },
    {
      id: '3',
      ano: '2017',
      titulo: 'WannaCry',
      descricao: 'Ransomware que afetou hospitais e empresas em mais de 150 países.',
    },
    {
      id: '4',
      ano: '2017',
      titulo: 'NotPetya',
      descricao: 'Ataque disfarçado de ransomware que causou bilhões em prejuízos globais.',
    },
    {
      id: '5',
      ano: '2020',
      titulo: 'SolarWinds',
      descricao: 'Espionagem contra agências dos EUA usando software comprometido.',
    },
    {
      id: '6',
      ano: '2023',
      titulo: 'Atento',
      descricao: 'Empresa brasileira sofreu sequestro de dados com prejuízo de R$ 197 milhões.',
    },
  ];

  return (
    <View style={stylesD.container}>
      <Text style={stylesD.title}>Linha do Tempo de Ataques Cibernéticos</Text>
      <FlatList
        data={eventos}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={stylesD.evento}>
            <View style={stylesD.iconBox}>
              <MaterialIcons name="timeline" size={24} color="#010b15ff" />
              <Text style={stylesD.ano}>{item.ano}</Text>
            </View>
            <View style={stylesD.textBox}>
              <Text style={stylesD.titulo}>{item.titulo}</Text>
              <Text style={stylesD.descricao}>{item.descricao}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default DiscoverScreen;