// Изучим типы данных в js
// Есть примитивы их семь number, string, null, undefined, boolean, symbol, bigint
// Примитивы не являются объектами, хранятся по значению (by value), хронятся в стеке (stack)

let a = 10;
let b = a;

console.log(`
    let a = ${a}
    let b = ${b}
`)

b = 'Hello!!!';

console.log(`
    let a = ${a}
    let b = ${b}
`)

// И объекты - это могут быть массивы let a = [a, b, 7, true, ...], 
// объекты let a = {name: Johnny Silverhand, age: 32, married: false} 
// функции function name(){...}
// Объекты хронятся по ссылке (by reference)
// Сам объект лежит в куче (heap), а переменная хранит указатель (reference) на него. 

let user_001 = {
    name: 'Johnny Silverhand'
}

console.log(user_001.name) // Даст нам  Johnny Silverhand

let user_002 = user_001;
user_002.name = 'Bestia Amendiares'  


console.log(user_001.name)  // Даст нам Bestia Amendiares
console.log(user_002.name)  // Даст нам Bestia Amendiares

// Объяснение:
// Мы создали объект { name: 'Johnny Silverhand' } 
// он хранится в куче heap, а переменная user_001 содержит ссылку на этот объект 
// Когда мы делаем let user_002 = user_001 копируется ссылка, отдельная копия объекта не создается. 
// Теперь переменные user_001 и user_002 ссылаются / указывают на один и тот же объет в памяти.
// И если изменить данные через одну переменную, то эти изменения будут видны и чере вторую переменную. 

// Итог:
// Объекты, массивы и функции хранятся в куче heap
// Переменные хранят ссылку на этот объект, а не сам объект
// При копировании переменной копируется ссылка, а не сам объект.