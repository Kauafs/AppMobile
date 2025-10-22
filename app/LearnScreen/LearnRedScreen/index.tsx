import * as React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import styleLR from './styleLR';

export function RedTeamLearnScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styleLR.container}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <Text style={styleLR.mainTittle}>
        Aprender: Red Team
      </Text>

      <Image
        source={require('../../../img/redL.png')}
        style={styleLR.codeImage}
        resizeMode="contain"
      />

      <Text style={styleLR.textPhrase}>
        O Red Team simula ataques reais para testar a segurança de sistemas, redes e aplicações. O objetivo é encontrar falhas antes que atacantes reais explorem.
      </Text>

      <View style={styleLR.inputBox}>
        <Text style={styleLR.subTitle}>Conceitos-chave</Text>
        <Text style={styleLR.textItem}>Reconhecimento: coleta de informações sobre o alvo</Text>
        <Text style={styleLR.textItem}>Exploração: uso de vulnerabilidades para obter acesso</Text>
        <Text style={styleLR.textItem}>Pós-exploração: movimentação lateral e escalada de privilégio</Text>
        <Text style={styleLR.textItem}>Evasão: evitar detecção por antivírus e sistemas de defesa</Text>
      </View>

      <View style={styleLR.inputBox}>
        <Text style={styleLR.subTitle}>Ferramentas populares</Text>
        <Text style={styleLR.textItem}>Nmap: Varredura de rede</Text>
        <Text style={styleLR.textItem}>Metasploit: Exploração de vulnerabilidades</Text>
        <Text style={styleLR.textItem}>msfvenom: Criação de payloads</Text>
        <Text style={styleLR.textItem}>Burp Suite: Ataques em aplicações web</Text>
        <Text style={styleLR.textItem}>Hydra: Força bruta de senhas</Text>
      </View>

      <View style={styleLR.inputBox}>
        <Text style={styleLR.subTitle}>Prática sugerida: Ataque de Força Bruta com Hydra</Text>
        <Text style={styleLR.textItem}>1. Identifique o serviço alvo (ex: SSH, FTP, HTTP)</Text>
        <Text style={styleLR.textItem}>2. Prepare uma lista de usuários e senhas</Text>
        <Text style={styleLR.textItem}>3. Execute o Hydra:</Text>
        <Text style={styleLR.codeBlock}>
          hydra -L users.txt -P passwords.txt ssh://192.168.0.10
        </Text>
        <Text style={styleLR.textItem}>4. Analise os resultados e identifique credenciais válidas</Text>
      </View>
    </ScrollView>
  );
}

export default RedTeamLearnScreen;