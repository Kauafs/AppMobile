import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        padding: 20,
    },

      gridContainer: {
        paddingBottom: 10,
    },
    
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center'
    },

    list: {
        paddingBottom: 20,
    },

    card:{
        backgroundColor: '#161b22',
        borderRadius: 10,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#58a6ff',
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#58a6ff',
        marginBottom: 4,
    },

    cardText: {
        fontSize: 14,
        color: '#c9d1d9',
    },

    textBox: {
        flex:1,
        paddingRight: 10,
    },

    optionText:{
        fontSize: 16,
        marginLeft: 15,
        color: '#333',
        fontWeight: '500',
        textAlign: 'center',
    },

     optionDescription: {
        fontSize: 14,
        color: '#666',
        flexWrap: 'wrap',
        textAlign: 'center'
    },

    learn: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 12,
        marginBottom: 20,
    },

    learnContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        marginRight: 12,
},
});

export default styles;