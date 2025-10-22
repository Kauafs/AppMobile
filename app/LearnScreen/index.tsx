import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styleL'
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';


const topics = [
        {
            id: '1',
            title: 'Red Team',
            description: 'Simulações de ataque e exploração de vulnerabilidades.',
            color: '#ff4c4c',
            iconName: 'security',
            onPress: () => router.push('/LearnScreen/LearnRedScreen'),
        },
        {
            id: '2',
            title: 'Blue Team',
            description: 'Defesa, monitoramento e resposta a incidentes.',
            color: '#4c9aff',
            iconName: 'shield',
            onPress: () => router.push('/LearnScreen/LearnBlueScreen'),
        },
        {
            id: '3',
            title: 'Pentest',
            description: 'Testes de intrusão e análise de segurança.',
            color: '#ffa500',
            iconName:'bug-report'
            //onPress: () => router.push('///'),

        },
        {
            id: '4',
            title: 'Redes',
            description: 'Infraestrutura, protocolos e ataques comuns.',
            color: '#00c853',
            iconName: 'wifi'
            //onPress: () => router.push('///'),
        },
];
export function TopicsScreen(){
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Escolha o tema para aprender</Text>
        <FlatList
            data={topics}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.gridContainer}
            renderItem={({ item })=> (
                <TouchableOpacity style={[styles.learn, {backgroundColor: item.color}]} onPress={item.onPress}>
                    <View style={styles.learnContent}>
                        <MaterialIcons name={item.iconName} size={28} color={'#58a6ff'} style={styles.icon}/>
                        <View style={styles.textBox}>
                            <Text style={styles.optionText}>{item.title}</Text>
                            <Text style={styles.optionDescription}>{item.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>    
        )}
      />
    </View>
);
}
export default TopicsScreen;
 
    