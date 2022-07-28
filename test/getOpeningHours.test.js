const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se o zoo retorna como fechado na segunda às 1:40PM', () => {
    expect(getOpeningHours('Monday', '01:40-PM')).toBe('The zoo is closed');
  });
  it('Verifica se o zoo retorna como aberto no domingo às 8:00AM', () => {
    expect(getOpeningHours('Sunday', '08:00-AM')).toBe('The zoo is open');
  });
  // it('Verifica se o segundo paramentro como string retorna o Error', () => {
  //   expect(getOpeningHours('Wednesday', 'Dez')).toThrow(Error);
  // });
  // it('Verifica se o parâmetro referente a hora está em um valor entre 0 e 12', () => {
  //   expect(getOpeningHours('Wednesday', '13:05-PM')).toThrow(Error);
  // });
});
