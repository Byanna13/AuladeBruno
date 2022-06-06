import { View, Text, Button } from 'react-native';

export default props => {
    return(
        <View>
            <Text>Tela inicial</Text>  
            <Button title="Mudar para Index" 
            onPress={
                /*Aqui tem é uma funço*/
                () => {
                    props.navigation.navigate('Index')
                }
            }
            />
        </View>

    )
}