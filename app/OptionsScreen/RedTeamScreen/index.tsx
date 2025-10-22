import * as React from 'react';
import { Text, Image, ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import styleR from './styleR';
import { useState } from 'react';

export function RedTeamScreen() {
  const [funcName, setFuncName] = useState('');
  const [offsetExample, setOffsetExample] = useState('');
  const [memoryAddress, setMemoryAddress] = useState('');
  const [finalPayload, setFinalPayload] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const correctFunc = funcName.trim().toLowerCase() === 'gets()';
    const correctOffset = offsetExample.includes("'A'*76");
    const correctAddress = memoryAddress.includes("0x");
    const correctPayload = finalPayload === 'python print("A" * 76 + 0xpayload)';

    if (correctFunc && correctOffset && correctAddress && correctPayload) {
      setFeedback('Etapa de sobrescrita de buffer concluída');
    } else {
      setFeedback('Algum campo está incorreto');
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styleR.container}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 180}}
    >
      <Text style={styleR.mainTittle}>
        Desafio Red Team: Buffer Overflow
      </Text>

      <Image
        source={require('../../../img/image.jpg')}
        style={styleR.codeImage}
        resizeMode="contain"
      />

      <Text style={styleR.textPhrase}>
        Envie uma entrada que ultrapasse o tamanho do buffer e sobrescreva o endereço de retorno.
      </Text>

      <View style={styleR.inputBox}>
        <Text style={styleR.subTitle}>Função vulnerável</Text>
        <TextInput
          style={styleR.input}
          placeholder="Ex: vulnerable()"
          value={funcName}
          onChangeText={setFuncName}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styleR.inputBox}>
        <Text style={styleR.subTitle}>Offset</Text>
        <TextInput
          style={styleR.input}
          placeholder="Ex: 'A'*76"
          value={offsetExample}
          onChangeText={setOffsetExample}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styleR.inputBox}>
        <Text style={styleR.subTitle}>Endereço</Text>
        <TextInput
          style={styleR.input}
          placeholder="Ex: 0xvulnerable()"
          value={memoryAddress}
          onChangeText={setMemoryAddress}
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styleR.inputBox}>
        <Text style={styleR.subTitle}>Payload</Text>
        <TextInput
          style={styleR.input}
          placeholder='Ex: python -c "print("A" * offset + 0xvulnerable())'
          value={finalPayload}
          onChangeText={setFinalPayload}
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styleR.button} onPress={handleSubmit}>
        <Text style={styleR.buttoText}>Testar Exploit</Text>
      </TouchableOpacity>

      {feedback !== '' && (
        <View>
          <Text style={styleR.feed}>{feedback}</Text>
        </View>
      )}
    </ScrollView>
  );
}

export default RedTeamScreen;