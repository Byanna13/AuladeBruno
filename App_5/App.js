import { Text, View } from 'react-native';
import Cabecalho from './src/componentes/Cabecalho';
import Rodape from './src/componentes/Rodape';
import Menu from './src/componentes/Menu';
import Alerta from './src/componentes/Alerta';

export default function App() {
  return (
    <View>
      {/*<Cabecalho> </Cabecalho>*/}
      <Cabecalho titulo="Tela Inicial" subtitulo="Subtítulo" />
      <Menu />
      <Rodape />
      <Alerta />
      {/*<Text>Menu</Text>
      <Text>Rodapé</Text>*/}
    </View>
  );
}