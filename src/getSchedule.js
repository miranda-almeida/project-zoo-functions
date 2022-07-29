const data = require('../data/zoo_data');

let officeHour;
let exhibition;

// const days = {
//   Monday: { officeHour, exhibition },
//   Tuesday: { officeHour, exhibition },
//   Wednesday: { officeHour, exhibition },
//   Thursday: { officeHour, exhibition },
//   Friday: { officeHour, exhibition },
//   Saturday: { officeHour, exhibition },
//   Sunday: { officeHour, exhibition },
// };
const infos = {
  officeHour,
  exhibition,
};

const daySchedule = (day) => {
  if (day === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  const animalAvailable = data.species.filter(({ availability }) => availability.includes(day));
  const matchOpenHour = data.hours[day].open;
  const matchCloseHour = data.hours[day].close;
  officeHour = `Open from ${matchOpenHour}am until ${matchCloseHour}pm`;
  exhibition = animalAvailable.map(({ name }) => name);
  return infos;
};
console.log(daySchedule('Tuesday')); // returning undefined

function getSchedule(scheduleTarget) {
  const finder = data.species.find((names) => names.name === scheduleTarget);
  return finder.availability;

}
// console.log(getSchedule('lions'));
module.exports = getSchedule;
