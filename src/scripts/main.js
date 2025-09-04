'use strict';

const dataSalaryes = document.querySelectorAll('[data-salary]');
const ul = document.querySelector('ul');

function sortList(list) {
  const arrayDatas = Array.from(list);
  const toNumber = (string) => {
    let result = '';

    result = string.replaceAll('$', '').replaceAll(',', '');

    return +result;
  };

  arrayDatas.sort((firstLi, secondLi) => {
    const salaryFirst = toNumber(firstLi.getAttribute('data-salary'));
    const salarySecond = toNumber(secondLi.getAttribute('data-salary'));

    return salarySecond - salaryFirst;
  });

  return ul.append(...arrayDatas);
}

function getEmployees(list) {
  const childrens = Array.from(list.children);

  const result = [];

  for (const li of childrens) {
    const person = {};

    person.name = li.innerText;
    person.position = li.getAttribute('data-position');
    person.salary = li.getAttribute('data-salary');
    person.age = li.getAttribute('data-age');

    result.push(person);
  }

  return result;
}

sortList(dataSalaryes);
getEmployees(ul);
