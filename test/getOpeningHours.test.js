const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se o zoo retorna como fechado na segunda às 1:40PM', () => {
    expect(getOpeningHours('Monday', '01:40-PM')).toBe('The zoo is closed');
  });
  it('Verifica se o zoo retorna como aberto no domingo às 8:00AM', () => {
    expect(getOpeningHours('Sunday', '08:00-AM')).toBe('The zoo is open');
  });
  it('Verifica se o segundo paramentro como letras na hora retorna Erro', () => {
    expect(() => getOpeningHours('Wednesday', '2g:14-AM')).toThrow('The hour should represent a number');
  });
  it('Verifica se o parâmetro referente a hora está em um valor entre 0 e 12', () => {
    expect(() => getOpeningHours('Wednesday', '13:05-PM')).toThrow(console.log(Error));
  });
  it('Verifica se o parâmetro referente aos está em um valor entre 0 e 59', () => {
    expect(() => getOpeningHours('Tuesday', '12:69-PM')).toThrow(console.log(Error));
  });
  it('Verifica se o parâmetro referente a AM/PM', () => {
    expect(() => getOpeningHours('Wednesday', '13:71-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se o primeiro parâmetro recebe um dia da semana válido', () => {
    expect(() => getOpeningHours('dia', '13:11-AM')).toThrow(console.log(Error));
  });
  it('Verifica se o zoo retorna como aberto no domingo às 8:00AM', () => {
    expect(getOpeningHours('')).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
