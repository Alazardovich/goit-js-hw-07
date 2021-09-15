// const ulEl = document.querySelector('#categories');

const itemEl = document.querySelectorAll('.item');

itemEl.forEach((element)=> 
   console.log(
`${element.querySelector('h2').textContent}
 ${element.querySelectorAll('li').length}`)
  
);




