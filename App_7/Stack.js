import Index from '../pages/Index';
import Contato from '../pages/Contato';
import Sobre from '../pages/Sobre';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default () => {
    return (
        /*Stack initialRouteName define quem abre primeiro*/
        <Stack.Navigator initialRouteName='Index'>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Contato" component={Contato} />
            <Stack.Screen name="Sobre" component={Sobre} />
        </Stack.Navigator>
    )
}