import { Text, View } from "react-native";
import { Button } from "react-native";

export default props => {

    return (
        <View>
            <Text>Esta é a Tela de Contato</Text>
            {/*'navigate' é o caminho ao qual vai percorrer, a rota(parametros)*/}
            <Button title="Ir para Index"
            onPress={() => {
                props.navigation.navigate("Index")
            }}
            />
            <Button title="Ir para Contato"
            onPress={() => {
                props.navigation.navigate("Contato")
            }}
            />
            {/*'goBack' para voltar a tela anterior independente de qual seja*/}
            <Button color='red' title="Voltar"
            onPress={() => {
                props.navigation.goBack()
            }}
            />
        </View>
    )
}