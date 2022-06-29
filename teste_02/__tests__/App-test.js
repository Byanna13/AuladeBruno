import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native'
import App from '../App';

describe('Teste de Snapshot', () => {
    it('Snapshot de App', () => {
        const tela = renderer.create(<App />).toJSON();
        expect(tela).toMatchSnapshot();
    })
})
describe('Teste de Componentes', () => {
    it('Snapshot de Componentes de App', () => {
        const {getByText, getByTestId } = render (<App />);

        const textoInicial = getByText('Cálculo do Dobro');
        expect(textoInicial).toBeDefined();
        //expect(textoInicial).toBeTruthy();
        
        expect(getByTestId("entrada")).toBeDefined();
        expect(getByTestId("calc")).toBeDefined();
        expect(getByTestId("resultado")).toBeDefined();
        
    })
})

describe('Testando Operações', () => {
    it('Teste de Dobro Positivo', () => {
        const {getByTestId, getByText, getAllByText} = render (<App />);

        const campoEntrada = getByTestId("entrada");
        fireEvent.changeText(campoEntrada, 15);

        const botao = getByTestId("calc");
        fireEvent.press(botao);

        //expect(getByText("30")).toBeTruthy();
        expect(getAllByText("30").length).toBe(1);
    })
    it('Teste de Dobro Negativo', () => {
        const {getByTestId, getByText, getAllByText} = render (<App />);

        const campoEntrada = getByTestId("entrada");
        fireEvent.changeText(campoEntrada, -15);

        const botao = getByTestId("calc");
        fireEvent.press(botao);

        //expect(getByText("30")).toBeTruthy();
        expect(getAllByText("-30").length).toBe(1);
    })
})