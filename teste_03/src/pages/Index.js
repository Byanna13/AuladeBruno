import { Text, View, Button } from "react-native";

export default props => {
    return (
        <View>
            <Text>Tela Inicial</Text>
                <Button title="Ir para Dobro" onPress={() => { props.navigation.navigate("Dobro"); }} testID='btnIndex' />
        </View>
    )
}