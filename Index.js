import { View, Text, Button } from 'react-native';

export default props => {
    return(
        <View>
            <Text>Tela inicial</Text>  
            <Button title="Mudar para Contato" 
            onPress={
                /*Aqui tem é uma função*/
                () => {
                    props.navigation.navigate('Contato')
                }
            }
            />
        </View>

    )
}