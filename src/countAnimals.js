const data = require('../data/zoo_data');

const counter = () =>
  data.species.reduce((accumulator, specie) => {
    accumulator[specie.name] = specie.residents.length;
    return accumulator;
  }, {});

const finder = (names) => data.species.find((specie) => specie.name === names.specie).residents;

const gender = (names) => finder(names).filter((residents) => residents.sex === names.sex);

function countAnimals(animal) {
  if (!animal) {
    return counter();
  }
  if (animal.sex) {
    return gender(animal).length;
  }
  if (!animal.sex) {
    return finder(animal).length;
  }
}

module.exports = countAnimals;
