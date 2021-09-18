const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const olEl = document.querySelector('#ingredients');

ingredients.forEach((element)=> {
const liEl = document.createElement('li');
console.log(liEl);
liEl.textContent = element;
olEl.appendChild(liEl);
});
