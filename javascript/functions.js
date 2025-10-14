// Функции в JavaScript - это объекты первого класа или (firs-class citizens).
// Это значит 
// - их можно присваивать переменным
// - передавать как аргументы
// - возвращать из других функций
// - хранить в массивах / объектах 
// - добавлять им свойства как обычным объектам 

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

// Контексе this
// Что такое this? Это контекст выполнение функции, 
// то есть указатель на объект, к которому функция пренадлежит в момент вызова.
// Глобальный контекст
console.log(this)
// В браузере Window
// В Node.js {}

// В обычной функции
function showThis(){
    console.log(this)
}
showThis()

// В браузере Window (В строгом режиме undefined)
// В Node.js global

// В методе объекта
const user_001 = {
    first_name: 'Panam',
    surname: 'Palmer',
    showInfo() {
        console.log(this.first_name)
    }
}

user_001.showInfo();

// Явное управление контекстом (call, apply, bind)
// call(thisArg, ...args) - вызывает сразу с заданым this;
// apply(thisArg, [args]) - то же самое, но аргументы - мыссив;
// bind(thisArg) - возвращает новую функцию с привязанным контекстом.

// Все три метода call, apply, bind - пренадлежат всем функциям, потому что функции - это объект типа Function.
// Они позволяют вручную урпавлять контекстом this, то есть указывать, какой объект будет "владельцем" функции при вызове.

// 1. call(thisArg, ...args)
// Вызывает функцию немедленно с заданным контекстом this и агрументами, переданными через зяаятую 
// Пример 1 (простой пример)

function sayHallo(message) {
    const user_info = {name_001: ''}
    user_info.name_001 = this.name
    console.log(`${message}, ${user_info.name_001}`)
}

const user__002 = {name: 'Michael De Santa'}
sayHallo.call(user__002, 'Hello')

// Пример 2 - несколько аргументов 
function print_user_info(message, city) {
    console.log(`${message}! My full name is ${this.name}, I am from ${city} `)
}

const user__003 = {name: 'Altiera Cunningham'}
print_user_info.call(user__003, 'Hello', 'Night City')

// Пример 3 - повторное использование функции или "Функционльное заимствование"
// В данном случае ондна функция используется для разных объектов

function printJob(){
    console.log(`
        ${this.name} is ${this.job}     
    `)
}

let data_001 = {
    name: 'Goro Takemura',
    job: 'bodyguard of Saburo Arasaka'
}

let data_002 = {
    name: 'Rogue Amendiares',
    job: 'Queen of the fixers, Afterlife'
}

printJob.call(data_001)
printJob.call(data_002)

// Пример 4 - работа с встроенными методами.
const number__001 = [1, 2, 3, 4, 5];
const max = Math.max.call(null, ...numbers);
console.log(max)

// apply(thisArg, [argsArray])
// Почти тоже самое, что call, но аргументы передаются массивом.
// Удобно, когда аргументы уже находятся в массиве или в списке. 
// Пример 1 - базовый.

const character_data = {
    name: 'Altiera Cunningham',
    from: 'Night City'
}



function sayHallo__001(message, job) {
    console.log(`
        ${message} ${this.name} ${job}
    `)
}

// Пример 3 - использования apply для массивоподобных объектов 

// Пример 4 - передача массива параметров
let character_arr = ['Altiera Cunningham','Night City', 'Netrunner'];

function print_user_info_001(name, from, jop) {
    console.log(`
        Full name: ${name},
        From: ${from},
        Job: ${jop}
    `)
}
print_user_info_001.apply(null, character_arr)


sayHallo__001.apply(character_data, ['Her full name is', 'is the best netrunner in Night City'])







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