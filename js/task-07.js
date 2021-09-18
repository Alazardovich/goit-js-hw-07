const inputSize = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputSize.addEventListener('input', onChangeSize);
function onChangeSize(event){
// console.log(event.currentTarget.value);
spanText.style.fontSize = event.target.value + '%';
}

// console.log(inputSize.value);
// console.log(spanText.style);


