import { View, Text, Button } from 'react-native';

export default props => {
    return(
        <View>
            <Text>Tela de Contato</Text>  
            <Button title="Mudar para Sobre" 
            onPress={
                /*Aqui tem é uma função*/
                () => {
                    props.navigation.navigate('Sobre')
                }
            }
            />
        </View>

    )
}