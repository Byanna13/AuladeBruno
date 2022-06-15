import { View, Text } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default props => {
    return (
        <View>
            <Text>Tela Resultado</Text>
            <Text>{props.route.params.nomeDig}</Text>
            <Text>{props.route.params.cpfDig}</Text>
            <Text>{props.route.params.senhaDig}</Text>
        </View>
    )
}