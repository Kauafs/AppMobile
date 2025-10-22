import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#1e1e2f',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    animationBox: {
        backgroundColor: '#a55eea', 
        borderRadius: 20,
        padding: 20,
        marginBottom: 30,
        borderWidth: 4,
        borderColor: '#00f2ff'
    },

    logo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },

    animation: {
        width: 290,
        height: 290,
        marginBottom: 20,
    },

    title: {
        fontSize: 22,
        color: '#00f2ff',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold',
        letterSpacing: 1.2,
    },

    subtitle: {
        fontSize: 16,
        color: '#00f2ff',
        textAlign: 'center',
        marginBottom: 30,
    },

    button:{
        backgroundColor: '#a55eea',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
    },

    buttonText: {
        color: '#00f2ff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    });

export default styles;