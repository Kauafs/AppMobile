import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text} from 'react-native'
import styles from './stylesH';
import  CustomButtom  from './componentsH';
import LottieView from 'lottie-react-native';
 
export interface HomeScreenProps {
}

export default function HomeScreen (props: HomeScreenProps) {
    
    return (
        
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#fff'/>
            <View style={styles.animationBox}>
                <LottieView source={require('../../anm/hacker.json')} autoPlay loop style={styles.animation}/>
            </View>
                <Text style={styles.title}>Bem Vindo ao CyberShield</Text>
                <Text style={styles.subtitle}>Descubra sobre o mundo de cibersegurança</Text>
            <CustomButtom/>
        </View>
    );
}


