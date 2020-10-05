const fs = require("fs");

let content;

// синхронное чтение файла 
// Мы читаем файл, используя синхронный интерфейс модуля fs.
// Он работает ожидаемым образом: в переменную content сохраняется содержимое test.txt 
// Проблема с этим подходом заключается в том, что Node.js будет заблокирована до 
//  завершения операции, то есть, пока читается файл, она не может сделать ничего полезного.

// try {
//     content = fs.readFileSync("test.txt", 'utf-8');
// } catch(e) {
//     console.log(e);
// }

// console.log(content);

// Так появились функции обратного вызова (колбеки): если вы передаете функцию другой функции в качестве параметра, вы можете вызвать её внутри функции, когда она закончит свою работу. Нет необходимости возвращать значения, нужно только вызывать другую функцию с этими значениями.
// В основе Node.js лежит принцип «первым аргументом в колбеке должна быть ошибка». 
// Его придерживаются базовые модули, а также большинство модулей, найденных в NPM.
// Асинхронное чтение файла
// Программа в данном случае выведет  'start reading a file...', потом 'end of the file', а потом содержимое файла или ошибку
// вот что значит асинхронная обработка, остальной код выполняется, пока текстовый файл читается
console.log('start reading a file...');

fs.readFile("test.txt", "utf-8", function(err, content) {
    if(err) {
        console.log("error happened");
        return console.log(err);
    }
    console.log(content);
});

console.log('end of the file');
