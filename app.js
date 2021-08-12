"use strict";

const form = document.getElementById('form');
const table = document.getElementById('table');
const row = document.getElementById('row');
const column = document.getElementById('column');
const formError = document.querySelector('.error');

function tableGenerator(column, row) {
  let tableTemplate;
  let trTemplate = ''
  for (let trIndex = 1; trIndex <= row; trIndex++) {
    let tdTemplate = ""
    for (let tdIndex = 1; tdIndex <= column; tdIndex++) {
      tdTemplate += `<td>${trIndex} ${tdIndex}</td>`
    }
    trTemplate = `<tr>${trTemplate}${tdTemplate}</tr>`
  }
  tableTemplate = `<tbody>${trTemplate}</tbody>`
  return tableTemplate
}

function colorChanger(e) {
  const elem = e.target;
  if (elem.tagName === 'TD' || elem.tagName === 'TR') {
    elem.classList.toggle("green")
  }
}

function tableRender() {
  table.innerHTML = tableGenerator(column.value, row.value);
  table.addEventListener("click", colorChanger)
}

function checkInput(val) {
  const n = Math.floor(Number(val));
  return n !== Infinity && String(n) === val && n > 0;
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const isRowValid = checkInput(row.value);
  const isColumnValid = checkInput(column.value);
  if (!isRowValid || !isColumnValid) {
    formError.innerHTML = "Please only enter numeric positive characters! (Allowed input:1 2 3 etc.)";
    return
  }
  formError.innerHTML = "";
  tableRender();
});

