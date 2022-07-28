const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função retorna undefined ao receber um parâmetro vazio', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se o parâmetro recebido é string', () => {
    expect(handlerElephants(24)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se o parâmetro count retorna 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica se o parâmetro names retorna o array com o nome de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se o parâmetro averageAge retorna 10.5 como média da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica se o parâmetro location retorna NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Verifica se o parâmetro popularity retorna 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Verifica se o parâmetro availability retorna um array com os dias de visitação disponíveis', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se o parâmetro de string vazia retorna null', () => {
    expect(handlerElephants('')).toBe(null);
  });
});
