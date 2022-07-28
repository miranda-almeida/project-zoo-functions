const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((managerid) => managerid.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const saveManager = data.employees.filter((manager) => manager.managers.includes(managerId));
    return saveManager.map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
