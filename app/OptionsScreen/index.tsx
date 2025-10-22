import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styleO'
import { router } from 'expo-router';

const learningPaths = [
  {
    id: '1',
    title: 'Red Team',
    animation: require('../../anm/redteam.json'),
    onPress: () => router.push('/OptionsScreen/RedTeamScreen'),
    color: '#c31e1eff'
  },
  {
    id: '2',
    title: 'Blue Team',
    animation: require('../../anm/blueteam.json'),
    onPress: () => router.push('/OptionsScreen/BlueTeamScreen'),
    color: '#14129bff'

  },
  {
    id: '3',
    title: 'Osint',
    animation: require('../../anm/osint.json'),
    //onPress: () => router.push('GrcScreen'),
    color: '#14b0beff'

  },
  {
    id: '4',
    title: 'Malware',
    animation: require('../../anm/malware.json'),
    onPress: () => router.push('DevSecOpsScreen'),
    color: '#c3a51eff'

  },
];

export function LearningPathScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o tipo do seu desafio:</Text>
      <FlatList
        data={learningPaths}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.gridItem, {backgroundColor: item.color}]} onPress={item.onPress}>
            <LottieView source={item.animation} autoPlay loop style={styles.gridIcon} />
            <Text style={styles.gridText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default LearningPathScreen;