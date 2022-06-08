import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from './src/pages/Index';
import Contato from './src/pages/Contato';
import Sobre from './src/pages/Sobre';

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      {/*screenOptions={{headerShown: false}} retira o cabeçalho, e igual a true coloca de volta, sem o codigo ele fica automaticamente*/}
      <Stack.Navigator initialRouteName="Index" screenOptions={{headerShown: true}} >
        {/*options={{ title: 'TELA INICIAL' define o nome do cabeçalho*/}
        {/*Add estilo usando headerStyle:{conteudos}*/}
      <Stack.Screen name="Index" component={Index} options={{ title: 'TELA INICIAL',
            headerStyle: {
            backgroundColor: 'green', }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
            }} />
      <Stack.Screen name="Contato" component={Contato} options={{ title: 'CONTATO',
            headerStyle: {
            backgroundColor: 'green', }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      <Stack.Screen name="Sobre" component={Sobre} options={{ title: 'SOBRE',
            headerStyle: {
            backgroundColor: 'green', }, headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}