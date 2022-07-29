const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entries = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      entries.child += 1;
    }
    if (person.age >= 18 && person.age < 50) {
      entries.adult += 1;
    }
    if (person.age >= 50) {
      entries.senior += 1;
    }
  });
  return entries;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  let values = 0;
  const children = Object.values(countEntrants(entrants))[0] * data.prices.child;
  const adults = Object.values(countEntrants(entrants))[1] * data.prices.adult;
  const seniors = Object.values(countEntrants(entrants))[2] * data.prices.senior;
  values += children;
  values += adults;
  values += seniors;
  return values;
}

module.exports = { calculateEntry, countEntrants };
