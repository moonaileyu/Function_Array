// 1

function calculateTotal(prices) {
    let total = 0;

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }

    return total;
}

const prices = [120, 45, 300, 85, 210];

console.log(calculateTotal(prices));


// 2

function getMaxPriceItem(items) {
    let maxItem = items[0];

    for (let i = 1; i < items.length; i++) {
        if (items[i].price > maxItem.price) {
            maxItem = items[i];
        }
    }

    return maxItem.title;
}

const products = [
    { title: "Блокнот", price: 120 },
    { title: "Ручка", price: 35 },
    { title: "Рюкзак", price: 1450 },
    { title: "Флешка", price: 420 },
    { title: "Навушники", price: 1800 },
    { title: "Чохол для телефону", price: 290 },
    { title: "Павербанк", price: 1100 },
    { title: "Кабель USB", price: 150 },
    { title: "Бездротова мишка", price: 650 },
    { title: "Підставка під ноутбук", price: 890 }
];

console.log(getMaxPriceItem(products));


// 3

function formatNumber(num) {
    return num < 10 ? '0' + num : String(num);
}

const formatNumberArrow = (num) => num < 10 ? '0' + num : String(num);

console.log(formatNumber(4));
console.log(formatNumber(44));
console.log(formatNumberArrow(4));
console.log(formatNumberArrow(44));


// 4

function sum(a, b) {
    return a + b;
}

const sumArrow = (a, b) => a + b;

console.log(sum(3, 4));
console.log(sum(2, 34));
console.log(sumArrow(3, 4));
console.log(sumArrow(2, 34));


// 5

function showMessage(name) {
    console.log(`Hello ${name}`);
}

const showMessageArrow = (name) => console.log(`Hello ${name}`);

showMessage('Mira');
showMessage('Pit');
showMessageArrow('Mira');
showMessageArrow('Pit');


// 6

function getProcent(num, procent) {
    return (num * procent / 100) + '%';
}

const getProcentArrow = (num, procent) => (num * procent / 100) + '%';

console.log(getProcent(200, 2));
console.log(getProcent(500, 10));
console.log(getProcentArrow(200, 2));
console.log(getProcentArrow(500, 10));


// 7

function formatPrice(num, symbol) {
    return num + symbol;
}

const formatPriceArrow = (num, symbol) => num + symbol;

console.log(formatPrice(200, '$'));
console.log(formatPrice(500, 'грн'));
console.log(formatPrice(40, 'євро'));
console.log(formatPriceArrow(200, '$'));
console.log(formatPriceArrow(500, 'грн'));
console.log(formatPriceArrow(40, 'євро'));


// 8

function roundTwoDecimals(num) {
    return Number(num.toFixed(2));
}

const roundTwoDecimalsArrow = (num) => Number(num.toFixed(2));

console.log(roundTwoDecimals(3.435345));
console.log(roundTwoDecimalsArrow(3.435345));


// 9

function isAdult(age) {
    return age >= 18;
}

const isAdultArrow = (age) => age >= 18;

console.log(isAdult(20));
console.log(isAdult(16));
console.log(isAdultArrow(20));
console.log(isAdultArrow(16));


// 10

function isValidPassword(password, minLength) {
    return password.length >= minLength;
}

const isValidPasswordArrow = (password, minLength) => password.length >= minLength;

console.log(isValidPassword('qwerty', 8));
console.log(isValidPassword('my_pass123', 8));
console.log(isValidPasswordArrow('qwerty', 8));
console.log(isValidPasswordArrow('my_pass123', 8));


// 11

function getMax(a, b) {
    return a > b ? a : b;
}

const getMaxArrow = (a, b) => a > b ? a : b;

console.log(getMax(10, 45));
console.log(getMax(7, 2));
console.log(getMaxArrow(10, 45));
console.log(getMaxArrow(7, 2));