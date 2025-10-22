import { Stack } from 'expo-router';

export default function Layout () {
    return (
        <Stack screenOptions={{
            animation: 'fade_from_bottom',
            headerStyle: { backgroundColor: '#a55eea'},
            headerTintColor: '#00f2ff',
        }}>
            <Stack.Screen name='index' options={{title: 'Home'}}/>
            <Stack.Screen name='LoginScreen/index' options={{title: 'Login'}}/>
            <Stack.Screen name='SelectionScreen/index' options={{title: 'Selection'}}/>
            <Stack.Screen name='CatalogScreen/index' options={{title: 'Shopping'}}/>
            <Stack.Screen name='OptionsScreen/index' options={{title: 'Trilha'}}/>
            <Stack.Screen name='OptionsScreen/RedTeamScreen/index' options={{title: 'Desafio'}}/>
        </Stack>
    );
}


