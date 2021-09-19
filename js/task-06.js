const containerInput = document.querySelector('input')
const focusInput = document.querySelector('#validation-input');
const lengthInput = containerInput.dataset.length;


// focusInput.addEventListener('change', eventing);
// function eventing(event){
//     const text=event.currentTarget.value;

//     if (text.length==lengthInput){
//         focusInput.classList.add('valid');
//         focusInput.classList.remove('invalid');

//     }
//     else {
//         focusInput.classList.add('invalid');
//         focusInput.classList.remove('valid');
//     }
// }
focusInput.addEventListener('blur',bluring); 
function bluring(event){
    const text=event.currentTarget.value;

    if (text.length==lengthInput){
        focusInput.classList.add('valid');
        focusInput.classList.remove('invalid');
    }
    else {
        focusInput.classList.toggle('invalid')

        // focusInput.classList.add('invalid');
        // focusInput.classList.remove('valid');
    }
}
