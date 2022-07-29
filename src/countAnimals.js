const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return data.species.reduce((accumulator, specie) => {
      accumulator[specie.name] = specie.residents.length;
      return accumulator;
    }, {});
  }
  if (animal.sex) {
    return data.species
      .filter((specie) => specie.name === animal.specie)[0]
      .residents.filter((residents) => residents.sex === animal.sex).length;
  }
  return data.species.filter((specie) => specie.name === animal.specie)[0].residents.length;
}

module.exports = countAnimals;
