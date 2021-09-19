const control = document.getElementById('controls');
const input = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.getElementById('boxes');

const createBoxes = amount => {
    const randomRgb = () => {
        const rgbNum = () => Math.floor(Math.random() * 256);
        const r = rgbNum();
        const g = rgbNum();
        const b = rgbNum();

        return `rgb(${r},${g},${b})`;
    };

    const arr = [];
    amount = input.value;
    arr.length = amount;

    arr.fill(amount).map((item, index) => {
        const baseSize = 30;
        const biggestSize = baseSize + index * 10;
        const box = document.createElement('div');
        box.setAttribute(
            'style',
            `width:${biggestSize}px ;height:${biggestSize}px; background-color:${randomRgb()}`,
        );
        boxes.append(box);
    });

    // amount = input.value;

    // for (let i = 0; i < amount; i += 1) {
    //     const basicSize = 30;
    //     const biggestSize = basicSize + i * 10;
    //     const box = document.createElement('div');
    //     box.setAttribute(
    //         'style',
    //         `width: ${biggestSize}px; height: ${biggestSize}px; background-color: ${randomRgb()}`,
    //     );
    //     boxes.append(box);
    // }
};

const destroyBoxes = () => {
    input.value = '';
    boxes.innerHTML = '';
};

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

// var render = document.querySelector('[data-action="render"]');
// var destroy = document.querySelector('[data-action="destroy"]');
// var boxes = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
//     fragment.appendChild(div);
//   }
//   boxes.appendChild(fragment);
// }

// function destroyBoxes() {
//   boxes.innerHTML = "";
// }

// function random() {
//   return Math.floor(Math.random() * 256);
// }