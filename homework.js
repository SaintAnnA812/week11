let currency = 'руб';
let button = document.querySelector('button');

let x = document.querySelector('.list__menu-price1');
let price1 = x.innerHTML

let y = document.querySelector('.list__menu-price2');
let price2 = y.innerHTML

let w = document.querySelector('.list__menu-price3');
let price3 = w.innerHTML

let z = document.querySelector('.list__menu-price4');
let price4 = z.innerHTML

let sum = (+price1 + +price2 + +price3 + +price4);
console.log(sum);

let summa = document.querySelector('.summa');
summa.innerHTML = sum + " " + currency


button.addEventListener('click', () => {
    let x = document.querySelector('.list__menu-price1');
    x.textContent = +price1 - (+price1 * 0.2);

    let y = document.querySelector('.list__menu-price2');
    y.textContent = +price2 - (+price2 * 0.2);

    let w = document.querySelector('.list__menu-price3');
    w.textContent = +price3 - (+price3 * 0.2);

    let z = document.querySelector('.list__menu-price4');
    z.textContent = +price4 - (+price4 * 0.2);

    let summa = document.querySelector('.summa');
    summa.textContent = sum - (sum * 0.2) + currency;

}
)
