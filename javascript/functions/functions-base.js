// Функции в JavaScript - это объекты первого класа или (firs-class citizens).
// Это значит 
// - их можно присваивать переменным
// - передавать как аргументы
// - возвращать из других функций
// - хранить в массивах / объектах 
// - добавлять им свойства как обычным объектам 

// Функции в JavaScript - это объекты типа Function, а значит, им можно добавить свойства
function funcIsObject(){
    console.log('Hello JavaScript Developer!')
}

funcIsObject.user_001 = 'Adam Smasher';
funcIsObject.user_002 = 'Johnny Silverhand';

console.log(funcIsObject.length)
console.log(funcIsObject)
console.log(Object.keys(funcIsObject));
// Методы создания 
// Function declaration
function funcName_001() {}

// Function Expression
const fucnName_002 = function(){}

// Arrow function
const funcName_003 = () => {}


// Function declaration
// Всплывает (hoistig) - можно вызывать до объявления
// Имеет свой this (динамический)
// Имеет свой argumtnts объект
// Может быть рекурсивной (вызывать саму себя)
// Определяется на уровне блок, в котором объявлена (с ES6 — блочная область видимости в let, const, class и функциях внутри блоков)


// Function Expression
// Не всплывает
// Имеет свой this (динамический)
// Имеет свой argumtnts объект
// Может быть рекурсивной (вызывать саму себя)
// Создается в момент выполнения строки, где была объявлена.

// Данные в функцию передаются через параметры (arguntns) 
// Параметры - это переменные, которые объявляются при определении функции
// При вызове функции значения, передоваемые в нее, называются аргументами.

// Параметры в свою очередь могут иметь значения по умолчанию
// Колличество параметров может быть множество 
// и если агрумент не передан то будет использованно значение по умолчаиню.
function showUserInfo(first_name, surname = 'Silverhand') {
    console.log(`
        Name - ${first_name}
        Surname - ${surname} 
    `)
}
showUserInfo('Johnny')
// Колличество параметров может быть любым
// Для работы с неизвестным колличеством аргументов используются rest-параметры (...)
// rest параметры собирают остальные аргументы в массив
function restParam(...number) {
    return number
}
let numbers = restParam(1, 2, 3, 4, 5)
console.log(numbers)

// rest-параметр должне быть всегда последним в списке параметров 
function restPraam_001(a, b, ...numbers){}

// Разница между параметрами и аргументами 
// Параметры - объявляются в поределении функции fucnttion myFunc (a, b) {...}
// Аргументы - передаются при вызове myFunc(1, 2)

// Псевдомассив arguments:
// До появления rest параметров использовался объект arguments
// Но argumtnst не являлся настоящим массивом, у него не было методов .map(), .reduce() и т.п.
// По этому rest-параметры современная и предпочтительная альтернатива.

// Параметры по умолчанию 
// function myFunc(character = 'Adam Smasher') {}
// Значение по умолчанию могут зависить от других параметров 
// function myFunc(character_001 = 'Adam Smasher', character_002 = character_001) {}

// Деструктуризация параметров.
// Можно распаковывать объекты и массивы прямо в параметрах.
function printCharacters({character_001, character_002}) {
    console.log(`
        ${character_001}
        ${character_002}
    `)
}

printCharacters({
    character_001: 'Jason Duval', 
    character_002: 'Lucia Caminos'
})









// Потеря контекста
// Если вынести метод в переменную - контекст теряется. 
const user_name_001 = user_001.showInfo;
// console.log(user_name_001) // undefined потому что вызван без объекта 

// Объявление функции 
let globalVar = 'Hello'; // Глобальная переменнаяю. 
// Доступная в любом месте программы в том числе и в нашей функции.

function showMessage(name = 'Johnny Silverhand') {
    let localVar = name  // Локальная переменная, 
    // доступна только внутри этой функции

    // Функции могут использовать глобальные переменные, 
    // если внутри нее нет переменных с таким же именем. 
    console.log(`${globalVar} ${localVar} !`)
    console.log(`You are a good man ${localVar}!`); 
}



showMessage('Arthur Morgan')

// Параметры функции могут иметь значения по умолчанию 
// И если вызвать функцию без аргумента, то данное значение по умолчанию будет использовано.
showMessage();

// Функции могут возращать значение

function returnMessage(name)  {
    return `Hello ${name}!`
}

let message = returnMessage('Johnny Silverhand');
console.log(message)


// Функции могут возвращать фуркцию 

function returnFunction (x) {
    return (y) => {
        return y + x
    }
}


let getResult = returnFunction(5)
// Теперь внутренняя функция помнит значение x из врешней функции это и есть замыкание close
// То есть в getResult лежит следующее (y) => y + 5

console.log(getResult(3))


function countFunc(n) {
    if(n === 0) {
        console.log('Stop');
        return;
    }
    console.log(n)
    countFunc(n - 1)
}

countFunc(5)