// Контекст this
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

// Потеря контекста 


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
const max = Math.max.call(null, ...number__001);
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


sayHallo__001.apply(
    character_data, 
    [
        'Her full name is', 
        'is the best netrunner in Night City'
    ]
)




// Явное управление контекстом (call, apply, bind)
// call(thisArg, ...args) - вызывает сразу с заданым this;
// apply(thisArg, [args]) - то же самое, но аргументы - мыссив;
// bind(thisArg) - возвращает новую функцию с привязанным контекстом.

// Все три метода call, apply, bind - пренадлежат всем функциям, 
// потому что функции - это объект типа Function.
// Они позволяют вручную урпавлять контекстом this, то есть указывать, 
// какой объект будет "владельцем" функции при вызове.




// Контекст this bind
// Разница в том, что call, apply вызывают фунцию сразу с указанным this.
// bind не вызывает функцию. Он создает и аозвращает НОВУЮ функцию (bound function) где:
// - this уже зафиксирован на всегда.
// - часть аргументов может быть "перезадана" (partial application)
// - у этой новой функции есть особые совойства / поводения при new

// Появляется отдельный объект-функция с внутренними слотами
// - [[BoundTargetFunction]] - исходная функция
// - [[BoundThis]] - зафиксированный this
// - [[BoundArguments]] - зафиксированные первые аргументы

function sayHi() {
    console.log(`Hi, ${this.name}!`);
}

const user_data = {
    name: 'Panam Palmer'
}
const user_data_001 = {
    name: 'Johnny Silverhand'
}

const sayHi_001 = sayHi.bind(user_data);
const sayHi_002 = sayHi.bind(user_data_001);

sayHi_001()
sayHi_002()
