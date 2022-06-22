import { Text, View, TextInput, Button } from 'react-native';

export default () => {
  return (
    <View>
      <Text testID='titulo'>Digite um número</Text>
      <TextInput testID='campo' placeholder="Digite aqui" />
      <Button testID='botao' title="Calcular" />
    </View>
  );
}
/*Para testar o codigo usa [npm run test -u], para testar e atualizar o codigo usa [npm run test -- -u] no prompt
[testID] para identificar os componentes pelo 'id'
[testText] para indentificar os componentes pelo 'texto'
*/