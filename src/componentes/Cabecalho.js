import { Text, StyleSheet } from 'react-native';

{/*Não precisa dar nome a função*/ }
{/*Não precisa usar 'function' nem 'return' pois o codigo 
funcionara normaumente, tirando o codigo fica simplificado */}

{/*export default function Cabecalho({titulo}) estaria poluindo o codigo*/ }
{/*var titulo = props.titulo*/ }
{/*Ctrl+Shift+Z para refazer*/ }
{/*Windows+ */ }

export default (props) => (

    <>
        {/*<Text>{titulo}</Text> estaria poluindo o codigo*/}
        <Text style={estilo.titulo}>{props.titulo}</Text>
        <Text>{props.subtitulo}</Text>
        <Text>Aqui é o Título</Text>
    </>
)

const estilo = StyleSheet.create({
    titulo: {
        fontSize: 20,
        color: 'blue',
    }
})