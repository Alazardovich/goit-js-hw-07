const ulEl = document.querySelector('#categories');
const itemEl = document.querySelector('.item');
// ItemEl.forEach(el=>console.log(el.length));
const titleEl = document.querySelectorAll('h2');
titleEl.forEach(element=> console.log(element.textContent));
const childUl = itemEl.lastElementChild;

const childItemUl=childUl.children.length;
console.log(childItemUl);

