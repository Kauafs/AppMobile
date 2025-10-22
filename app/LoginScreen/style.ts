import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'left'
    },

    subTitle: {
        fontSize:13,
        fontWeight: 'bold',
        color: '#4b7bec',
        textAlign: 'center',
        paddingTop: 14,
        paddingBottom: 14
    },

    button:{
        backgroundColor: '#a55eea',
        paddingVertical: 12,
        paddingHorizontal: 125,
        borderRadius: 25,
        marginTop: 20,
    },
    
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'
    },     

    iconLogin: {
        width: '100%',
        height: 190,
        marginBottom: 20,
        marginTop: 20
    },

    containSocial: {
        flexDirection: 'row',
        justifyContent: 'space-between' ,
        gap: 10,
    },

    socialButtom: {
        backgroundColor: '#a55eea',
        borderRadius:4,
        width:60,
        height:50
    },

    registerText: {
        textAlign: 'center',
        fontSize: 14,
        color: '#ffffff',
        marginTop: 20,
    },

    registerLink: {
        color: '#4b7bec',
        fontWeight: 'bold',
    },
});

export default styles;