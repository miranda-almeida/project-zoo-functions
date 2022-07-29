const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(manager) {
  const finder = data.employees.find(({ id }) => manager === id).responsibleFor[0];
  const older = data.species.find(({ id }) => id === finder)
    .residents.sort(({ age: a }, { age: b }) => b - a);
  return Object.values(older[0]);
}
console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
