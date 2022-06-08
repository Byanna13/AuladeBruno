import { Text, View } from "react-native";
import { Button } from "react-native";

export default props => {

    const nomeRecebido = props.route.params==undefined ? "" : props.route.params.nome
    const telefone = props.route.params==undefined ? "" : props.route.params.telefone

    /*
    let nomeRecebido = ""
    let telefone = ""
    if (props.route.params == undefined) {
        nome = props.route.params.nome
        nome = props.route.params.telefone
    }*/

    return (
        <View>
            {/*<Text>Esta é a Tela de Contato</Text>*/}
            {/*'props.route.params.name' muda o nome de acordo com o que tem no index*/}
            <Text>{nomeRecebido}</Text>
            <Text>{telefone}</Text>
            
            {/*<Text>{props.route.params.nome}</Text>
            <Text>{props.route.params.telefone}</Text>
            <Text>{props.route.params.endereco}</Text>*/}

            <Button title="Ir para index"
            onPress={() => {
                props.navigation.navigate("Index")
            }}
            />
            <Button title="Ir para Sobre"
            onPress={() => {
                props.navigation.navigate("Sobre")
            }}
            />
        </View>
    )
}