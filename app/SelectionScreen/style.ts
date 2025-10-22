import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e2f',
        paddingTop: 20,
    },

    headerTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff'
    },

    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: '#43d1d8ff',
        },

    styleHeader: {
        height: '9%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#43d1d8ff'
    },

    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 30
    },

    option: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 12,
        marginBottom: 20,

    },
    optionText:{
        fontSize: 16,
        marginLeft: 15,
        color: '#333',
        fontWeight: '500',
        textAlign: 'center',
    },

    optionContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    optionDescription: {
        fontSize: 14,
        color: '#666',
        flexWrap: 'wrap',
        textAlign: 'center'
    },

    textBox: {
        flex:1,
        paddingRight: 10,
    },

    lottieIcon: {
        width: 120,
        height: 80,  
        marginRight: 10,
    },

    scrollView: {
        paddingBottom: 40,

    }

});

export default styles;