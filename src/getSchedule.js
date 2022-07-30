const data = require('../data/zoo_data');

// ao receber o nome de um animal como parâmetro, retorna seus dias disponíveis
// incluir dentro de if na função principal
const dayByAnimals = (scheduleTarget) => data.species
  .find((specie) => scheduleTarget === specie.name).availability;
// console.log(dayByAnimals('lions'));

// verifica se o nome inputado é o mesmo dos disponíveis no objeto species (expect true)
const search = (animal) => data.species.some((specie) => specie.name === animal);
// console.log(search('lions'));

// ao receber um dia da semana como parâmetro, retorna os animais disponíveis no dia
// incluir dentro de da chave >> exhibition <<
const animalsByDay = (onday) => {
  const filtered = data.species.filter((specie) => specie.availability.includes(onday));
  return filtered.map((names) => names.name);
};
// console.log(animalsByDay('Sunday'));

// define condições para o input 'Monday' e configura os objetos officeHour e exhibition
const daySchedule = (day) => {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  const officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
  const exhibition = animalsByDay(day);
  return { officeHour, exhibition };
};
// console.log(daySchedule('Tuesday'));

// gera cronograma completo, inserindo os objetos anteriores preenchidos e como valores dentro das chaves dos dias da semana de data.hours
const pickall = () => {
  const days = Object.keys(data.hours);
  return days.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = daySchedule(currentValue);
    return accumulator;
  }, {});
};

// aplica as condições para execução das funções anteriores
function getSchedule(scheduleTarget) {
  const days = Object.keys(data.hours).includes(scheduleTarget);
  if (search(scheduleTarget)) return dayByAnimals(scheduleTarget);
  if (!scheduleTarget || !days) {
    return pickall();
  }
  return { [scheduleTarget]: daySchedule(scheduleTarget) };
}

module.exports = getSchedule;
