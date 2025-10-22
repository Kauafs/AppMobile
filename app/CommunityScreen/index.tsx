import * as React from 'react';
import { Text, FlatList, View, TouchableOpacity, Linking, Image } from 'react-native'
import stylesC from './styleC';


export function CommunityScreen(){
    const plataforms = [
        {
            id: '1',
            title: 'TryHackMe',
            description: 'Aprenda segurança ofensiva e defensiva com labs interativos.',
            image: require('../../img/tryhackme2.png'),
            onPress: () => Linking.openURL('https://tryhackme.com')
        },
        {
            id: '2',
            title: 'HackTheBox',
            description: 'Desafios avançados de pentest em ambientes realistas.',
            image: require('../../img/hackthebox2.png'),
            onPress: () => Linking.openURL('https://www.hackthebox.com')
        },
        {
            id: '3',
            title: 'RootMe',
            description: 'Centenas de desafios em diversas áreas da segurança.',
            image: require('../../img/rootme2.png'),
            onPress: () => Linking.openURL('https://www.root-me.org'),

        },
    ];

    return(
        <View style={stylesC.container}>
            <FlatList
                data={plataforms}
                keyExtractor={(item) => item.id}
                contentContainerStyle={stylesC.scrollView}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={item.onPress} style={stylesC.card}>
                        <View>
                            <Image source={item.image} style={stylesC.image} resizeMode='contain'/>
                                <View>
                                    <Text style={stylesC.title}>{item.title}</Text>
                                    <Text style={stylesC.description}>{item.description}</Text>
                                </View>    
                        </View>
                    </TouchableOpacity>
            )}
            />
        </View>
    );
}

export default CommunityScreen;