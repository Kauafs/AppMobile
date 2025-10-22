import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 50,
    paddingHorizontal: 20,
    },

    textSuperior: {
        fontSize:20,
        fontWeight:'bold',
        marginLeft: 1,
    },

    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 20,
    },

    banner: {
        height: 100,
        backgroundColor: '#a55eea',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
    },

    bannerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    categoriesText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
    },
    categorieItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    iconText: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    },

    card: {
        width: 120,
        height: 120,
        marginRight:15,
        alignItems: 'center',
    },

    imageCard: {
        width: '80%',
        height: '100%',
        borderRadius: 12,
        marginBottom:5,
    },

    cardText: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    navigation: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        backgroundColor: '#a55eea',
        borderRadius: 12,
        marginBottom: 30,
    },

    textNavigation: {
        color: '#fff',
        fontWeight: 'bold',
    },

    cantoProfile: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

});

export default styles;