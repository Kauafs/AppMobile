import * as React from 'react';
import { Text, Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import styleB from './styleB';

export function BlueTeamScreen() {
  const [comando, setComando] = useState('');
  const [tipoProcesso, setTipoProcesso] = useState('');
  const [usuario, setUsuario] = useState('');
  const [permissao, setPermissao] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const corretoComando = comando.trim().toLowerCase() === 'ps aux';
    const corretoTipo = tipoProcesso == ('RATexe.sh');
    const corretoUsuario = usuario.trim().toLocaleLowerCase().includes('remote');
    const corretaPermissao = permissao.toLowerCase().includes('baixa');

    if (corretoComando && corretoTipo && corretoUsuario && corretaPermissao) {
      setFeedback('Análise de processo concluída com sucesso');
    } else {
      setFeedback('Algum campo está incorreto');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styleB.container}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <Text style={styleB.mainTittle}>
        Desafio Blue Team: Processo Suspeito
      </Text>

      <Image
        source={require('../../../img/temb.png')}
        style={styleB.codeImage}
        resizeMode="contain"
      />

      <Text style={styleB.textPhrase}>
        Analise o processo em execução e preencha os campos com base na imagem.
      </Text>

      <View style={styleB.inputBox}>
        <Text style={styleB.subTitle}>Comando utilizado</Text>
        <TextInput
          style={styleB.input}
          placeholder="Ex: ps aux"
          value={comando}
          onChangeText={setComando}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styleB.inputBox}>
        <Text style={styleB.subTitle}>Nome do malware</Text>
        <TextInput
          style={styleB.input}
          placeholder="Ex: beep.exe"
          value={tipoProcesso}
          onChangeText={setTipoProcesso}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styleB.inputBox}>
        <Text style={styleB.subTitle}>Significado do malware</Text>
        <TextInput
          style={styleB.input}
          placeholder="Ex: Se espalhar"
          value={usuario}
          onChangeText={setUsuario}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styleB.inputBox}>
        <Text style={styleB.subTitle}>Permissão</Text>
        <TextInput
          style={styleB.input}
          placeholder="Ex: baixa"
          value={permissao}
          onChangeText={setPermissao}
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styleB.button} onPress={handleSubmit}>
        <Text style={styleB.buttoText}>Validar Análise</Text>
      </TouchableOpacity>

      {feedback !== '' && (
        <View>
          <Text style={styleB.feed}>{feedback}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default BlueTeamScreen;