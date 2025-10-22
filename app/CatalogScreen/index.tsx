import * as React from 'react'
import { View, Text, ScrollView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';  
import styles from './styleCatalog';
import { LoginScreen } from '../LoginScreen';
export interface CatalogScreenProps {
}

export function CatalogScreen(props: CatalogScreenProps) {
    let name = 'Cshield'
    return (
        <View style={styles.container}>
            <View style={styles.cantoProfile}>
                <Text style={styles.textSuperior}>Bom Dia</Text>
                <Icon name="person" size={28} color='#000'  />
            </View>

            <Text style={styles.nameText}>{name}</Text>

            <View style={styles.banner}>
                <Text style={styles.bannerText}>Seja bem vindo a loja</Text>
            </View>

            <Text style={styles.categoriesText}>Categorias</Text>

            <View style={styles.categories}>
                <View style={styles.categorieItem}>
                    <Icon name="key" size={28} color='#000' />
                    <Text style={styles.iconText}>Criptografia</Text>
                </View>
                <View style={styles.categorieItem}>
                    <Icon name="lock" size={28} color='#000' />
                    <Text style={styles.iconText}>Segurança</Text>
                </View>
                <View style={styles.categorieItem}>
                    <Icon name="fingerprint" size={28} color='#000' />
                    <Text style={styles.iconText}>Osint</Text>
                </View>
                <View style={styles.categorieItem}>
                    <Icon name="hardware" size={28} color='#000' />
                    <Text style={styles.iconText}>Hardware</Text>
                </View>
            </View>

            <Text style={styles.categoriesText}>Produtos populares</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

            <View style={styles.card}>
                <Image style={styles.imageCard} />
                <Text style={styles.cardText}>Livro Black Hat</Text>
                <Text style={styles.cardText}>20.99</Text>
            </View>

            <View style={styles.card}>
                <Image style={styles.imageCard} />
                <Text style={styles.cardText}>Livro Red Team</Text>
                <Text style={styles.cardText}>30.99</Text>
            </View>
            <View style={styles.card}>
                <Image style={styles.imageCard} />
                <Text style={styles.cardText}>Livro Blue Team</Text>
                <Text style={styles.cardText}>50.99</Text>
            </View>
            </ScrollView>

            <View style={styles.navigation}>
                <Icon name="home" size={28} color='#fff' />
                <Icon name="search" size={28} color='#fff' />
                <Icon name="shopping-cart" size={28} color='#fff' />
                <Icon name="person" size={28} color='#fff' />
            </View>
        </View>
    );
}

export default CatalogScreen;