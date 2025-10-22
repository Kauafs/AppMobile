import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './stylesH';
import { router } from 'expo-router';

const CustomButtom = () => {
    return ( <Pressable onPress={() => router.push('/LoginScreen')}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Comece</Text>
        </View>
    </Pressable>
    );
}

export default CustomButtom;