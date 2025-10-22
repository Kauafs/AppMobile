import { StyleSheet } from "react-native";

const styleN = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        minHeight: '100%',
        
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#1e90ff',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 18,
        color: '#1e90ff',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 20,
    },
    label: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#1e90ff',
        
    },
    textButton: {
        color: '#1e90ff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#a55eea',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20
    },
    anim: {
        width: 250,
        height: 250,
        marginBottom: 20,
        alignSelf: 'center'
    },
    textScan: {
        color: '#1e90ff',
    }

});

export default styleN;