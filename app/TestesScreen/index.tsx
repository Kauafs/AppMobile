import * as React from "react";
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import stylesT from "./styleT";
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';


const tests = [
    {
        id: '1', 
        label: 'Verificar Rede', 
        icon: 'network-check',
        color: '#4dd0e1',
        OnPress: () => router.push('/TestesScreen/NetworkViewScreen')
    },
    {
        id: '2', 
        label: 'Ver Localização',
        icon: 'my-location',
        color: '#f06292'
    },
    {
        id: '3', 
        label: 'Analisar Foto',
        icon: 'photo-camera',
        color: '#0d2576ff',
        OnPress: () => router.push('/TestesScreen/FileTestScreen')
    },
]

export function TesteScreen(){
    return (
        <View style={stylesT.container}>
        <FlatList
        data={tests}
        keyExtractor={(item) => item.id}
        contentContainerStyle = {stylesT.scrollView}
        renderItem={({item}) => (
            <TouchableOpacity style={[stylesT.card, {backgroundColor: item.color}]} onPress={item.OnPress} >
                <MaterialIcons name={item.icon} size={40} color={'#fff'} style={stylesT.icon}/>
                <Text style={stylesT.cardText}>{item.label}</Text>
            </TouchableOpacity>
        )}
        />
        </View>
    )
}

export default TesteScreen;