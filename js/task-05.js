const inputName = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');
inputName.addEventListener('input', onInputCorrectName);
function onInputCorrectName(event) {
    console.log(event.currentTarget.value);
    spanName.textContent=event.currentTarget.value || "незнакомец"
}