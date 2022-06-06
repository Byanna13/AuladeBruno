/*Importa os codigos das outras paginas*/
import { View } from "react-native";
import Stack from "./src/navigation/Stack";
import { NavigationContainer } from "@react-navigation/native";

export default () => {
  return (
    <View>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </View>
  )
}