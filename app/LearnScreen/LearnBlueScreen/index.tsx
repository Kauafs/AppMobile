import * as React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import styleLB from './styleLB';

export function BlueTeamLearnScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styleLB.container}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <Text style={styleLB.mainTittle}>
        Aprender: Blue Team
      </Text>

      <Image
        source={require('../../../img/8.png')}
        style={styleLB.codeImage}
        resizeMode="contain"
      />

      <Text style={styleLB.textPhrase}>
        O Blue Team é responsável por proteger sistemas, detectar ameaças e responder a incidentes. Eles atuam de forma defensiva para manter a integridade e segurança da infraestrutura.
      </Text>

      <View style={styleLB.inputBox}>
        <Text style={styleLB.subTitle}>Conceitos-chave</Text>
        <Text style={styleLB.textItem}>Monitoramento contínuo de sistemas e redes</Text>
        <Text style={styleLB.textItem}>Detecção e resposta a incidentes</Text>
        <Text style={styleLB.textItem}>Análise de logs e eventos</Text>
        <Text style={styleLB.textItem}>Hardening de sistemas</Text>
      </View>

      <View style={styleLB.inputBox}>
        <Text style={styleLB.subTitle}>Ferramentas populares</Text>
        <Text style={styleLB.textItem}>Wazuh: Monitoramento e SIEM</Text>
        <Text style={styleLB.textItem}>Splunk: Análise de logs</Text>
        <Text style={styleLB.textItem}>Sysmon: Registro de eventos no Windows</Text>
        <Text style={styleLB.textItem}>auditd: Auditoria de sistema no Linux</Text>
        <Text style={styleLB.textItem}>Wireshark: Análise de tráfego de rede</Text>
      </View>

      <View style={styleLB.inputBox}>
        <Text style={styleLB.subTitle}>Prática sugerida: Análise de processo suspeito</Text>
        <Text style={styleLB.textItem}>1 - Execute um processo simulado no Kali Linux</Text>
        <Text style={styleLB.textItem}>2 - Use o comando:</Text>
        <Text style={styleLB.codeBlock}>
          ps aux | grep nome_do_processo
        </Text>
        <Text style={styleLB.textItem}>3 - Verifique o usuário, consumo de recursos e comportamento</Text>
        <Text style={styleLB.textItem}>4 - Tire um print da análise para registrar a atividade</Text>
      </View>
    </ScrollView>
  );
}

export default BlueTeamLearnScreen;