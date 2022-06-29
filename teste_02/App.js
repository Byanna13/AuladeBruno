import { Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default () => {
  const [numero, setNumero] = useState(0);
  const [dobro, setDobro] = useState(0);

  function dobro2(){
    setDobro(parseInt(numero)*2)
  }

  return (
    <View>
      <Text>Cálculo do Dobro</Text>
      <TextInput testID="entrada" placeholder='Digite um número: ' onChangeText={setNumero}/>
      <Button title="Calcular" onPress={dobro2} testID="calc" />
      <Text testID="resultado">{dobro}</Text>
    </View>
  );
}
