import { Text, View } from "react-native";
import { Button, TouchableHighlight } from "react-native";

export default props => {

    return (
        <View>
            <Text>Esta é a Tela inicial</Text>
            <Button title="Ir para Contato"
            onPress={() => {
                props.navigation.navigate("Contato", {nome:"Fabiana", telefone:"84", endereco:"CanG"})
            }}
            />
            <Button title="Ir para Sobre"
            onPress={() => {
                props.navigation.navigate("Sobre")
            }}
            />
            <TouchableHighlight
            onPress={() => {
                props.navigation.navigate("Sobre")
            }}>
                <View>
                    <Text>Ir para Sobre</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}