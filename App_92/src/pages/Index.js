import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default props => {

    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')

    function validar(){
        if(nome != ''){
            props.navigation.navigate("Resultado", {
                nomeDig:nome, cpfDig:cpf, senhaDig:senha
            })
        }
    }

    return (
        /*useState é ultilizado para substituir caracteres*/
        <View>
            <Text>Tela Inicial</Text>
            <Text>Nome:</Text>
            <TextInput 
            placeholder='Digite o nome completo:' onChangeText={setNome}
            />
            <TextInput 
            placeholder='Digite seu cpf:' onChangeText={setCpf}
            />
            <TextInput 
            placeholder='Senha:' onChangeText={setSenha} secureTextEntry={true}
            />
            <Button 
            title="Enviar" 
            onPress={() => {
                validar()
            }}
            />
        </View>
    )
}