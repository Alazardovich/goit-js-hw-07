  const valueElement = document.querySelector('#value');

  const decrementBtn = document.querySelector('button[data-action="decrement"]');
  console.log(decrementBtn);
  
  const incrementBtn = document.querySelector('button[data-action="increment"]'); 
  console.log(incrementBtn);
  
  const decrement = () => valueElement.textContent -=1;
  const increment = () => valueElement.textContent ++;
  
  decrementBtn.addEventListener('click',decrement);
  incrementBtn.addEventListener('click',increment);
