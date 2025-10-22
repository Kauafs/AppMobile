import * as React from 'react';
import { useState } from 'react';
import { Text, ScrollView, TouchableOpacity} from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import styleN from './styleN';
import { getIpLocal } from './api';
import LottieView from 'lottie-react-native';

export function NetworkViewScrenn(){
    
  const netinfo = useNetInfo();
  const [dados, setData] = useState<any>(null)

  const analyze = () => getIpLocal()
    .then(data => setData(data))
    .catch(error => console.error('Erro ao escanear a rede: ',error));

    return(
        <ScrollView style={{flex: 1, backgroundColor: '#1e1e2f'}} contentContainerStyle={styleN.container} showsVerticalScrollIndicator={false}>
          <Text style={styleN.title}>Verifique quantos dispositivos estão em sua rede</Text>
          <LottieView source={require('../../../anm/scan.json')} autoPlay loop style={styleN.anim}/>
          <Text style={styleN.subTitle}>Tipo de conexão: {netinfo.type}</Text>
          <Text style={styleN.subTitle}>Internet acessivel: {netinfo.isInternetReachable ? 'Sim' : 'Nao'}</Text>

          {netinfo.isInternetReachable && !dados && (<TouchableOpacity  style={styleN.button} onPress={analyze}>
            <Text style={styleN.textButton}>Escanear Rede</Text>
          </TouchableOpacity>)}

          {dados && (
            <>
          <Text style={styleN.label}>IP escaneados:</Text>
          {Object.entries(dados).map(([ip, status], index) =>(
            <Text key={index} style={styleN.textScan}>
              {ip} - {status == 'ativo' ? 'ativo':'inativo'}
          </Text>)
          )}
            </>
      )}
        </ScrollView>
    
    );
}
export default NetworkViewScrenn;

