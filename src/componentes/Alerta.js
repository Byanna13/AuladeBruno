import { useState } from 'react';
import { Text, Button } from 'react-native';

export default () => {
//Com a palavra 'return' embaixo é possivel add codigo JS em cima
// "+1" é para não começar com zero
//Hooks são funções / useState função lista

//variaveis == var / let / const
    //let numero = 0

    const [numero, setNumero] = useState(0)
{/* mesma coisa que o de cima {{const}}
    let numeroLista = useState(0)
    let numero = numeroLista[0]
    let alterarNumero = numeroLista[1]
*/}
    function ativou(){
        setNumero(parseInt(Math.random() * 1000 + 1))
        //numero = parseInt(Math.random() *1000 + 1)
    //alert("Clicou, Bora bb")
    //alert(parseInt(Math.random() * 1000 +1))
    }
    return (
    <>
        <Text>{numero}</Text>
        <Button title="ME CLIQUE" onPress={ativou}/>
    </>
)
}