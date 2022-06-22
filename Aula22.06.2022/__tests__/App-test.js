import renderer from 'react-test-renderer';
import App from '../App';
import {render} from '@testing-library/react-native';

describe('Teste de Snapshot', () => {
    it('Criação de snapshot', () => {
        const inicial = renderer.create(<App />).toJSON();
        expect(inicial).toMatchSnapshot();
    })
})

describe('Teste de Inicialização', () => {
    it('Verificando inicialização dos Componentes', () => {
        const {getByText, getByTestId} = render(<App />);

/*Testar os campos*/
        const tituloApp = getByTestId('titulo');
        expect(tituloApp).toBeDefined();

/*Testar os campos, codigo resumido e direto*/
        expect(getByTestId('campo')).toBeDefined();

        const botao = getByText('Calcular');
        expect(botao).toBeDefined();


    });
})