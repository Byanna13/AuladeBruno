function soma (num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function mutiplicacao(num1, num2){
    return num1 * num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

describe('Testes da função soma', () => {
    it('Soma com números positivos', () => {
        expect(soma(5, 3)).toBe(8);
    });
    
    it('Soma com números negativos', () => {
        expect(soma(-2, -5)).toBe(-7);
    })
})

describe('Testes da função subtração', () => {
    it('Subtração com números positivos', () => {
        expect(subtracao(10, 2)).toBe(8);
    });
    
    it('Subtração com números negativos', () => {
        expect(subtracao(-5, -2)).toBe(-3);
    })
})

describe('Testes da função multiplicação', () => {
    it('Multiplicação com números positivos', () => {
        expect(mutiplicacao(6, 4)).toBe(24);
    });
    
    it('Mutiplicação com números negativos', () => {
        expect(mutiplicacao(-6, -7)).toBe(42);
    })
})

describe('Testes da função divisão', () => {
    it('Multiplicação com números positivos', () => {
        expect(divisao(6, 2)).toBe(3);
    });
    
    it('Mutiplicação com números negativos', () => {
        expect(divisao(-9, -4)).toBe(2.25);
    })
})


/* Forma incorreta de fazer os testes 
test('Soma com números positivos', () => {
    expect(soma(5,3)).toBe(8);
});

test('Soma com números negativos', () => {
    expect(soma(-2, -5)).toBe(-7);
}) */