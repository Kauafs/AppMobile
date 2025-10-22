import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import LottieView from 'lottie-react-native'; 
import styles from './style';
import { router } from 'expo-router';

export interface SelectionScreenProps {
}

export function SelectionScreen (props: SelectionScreenProps) {
    const options = [
        {
            id: '1',
            title: 'Aprender',
            description: 'Acesse conteúdo sobre segurança digital',
            color: '#4b7bec',
            animation: require('../../anm/default.json'),
            onPress: () => router.push('LearnScreen'),

        },
        {
            id: '2',
            title: 'Praticar',
            description: 'Pratique sobre cibersegurança',
            color: '#fd9644',
            animation: require('../../anm/pratice.json'),
            onPress: () => router.push('OptionsScreen'),
        },
        {
            id: '3',
            title: 'Loja',
            description: 'Acesse conteúdo sobre segurança digital',
            color: '#26de81',
            animation: require('../../anm/shopping.json'),
            onPress: () => router.push('CatalogScreen'),
        },
        {
            id: '4',
            title: 'Explorar',
            description: 'Explore sobre o mundo de cibersegurança',
            color: '#a55eea',
            animation: require('../../anm/data.json'),
            onPress: () => router.push('DiscoverScreen')
        },
        {
            id: '5',
            title: 'Testar Dispositivo',
            description: 'Teste a segurança do seu Dispositivo',
            color: '#c9d159ff',
            animation: require('../../anm/teste.json'),
            onPress: () => router.push('TestesScreen'),

        },
        {
            id: '6',
            title: 'Comunidade',
            description: 'Encontre comunidades para ter uma melhor conexão',
            color: '#d45c66ff',
            animation: require('../../anm/comunidade.json'),
            onPress: () => router.push('CommunityScreen'),

        },
];
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <FlatList
            data={options}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity style={[styles.option, {backgroundColor: item.color }]} onPress={item.onPress}>
                    <View style={styles.optionContent}>
                        <LottieView source={item.animation} autoPlay loop style={styles.lottieIcon}/>
                        <View style={styles.textBox}>
                            <Text style={styles.optionText}>{item.title}</Text>
                            <Text style={styles.optionDescription}>{item.description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default SelectionScreen;




