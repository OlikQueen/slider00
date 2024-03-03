export const callback = () => {
    // function coll() {
    //     console.log("матрёшка");
    // };
    // function bar(fanColl) {
    //     fanColl();
    // };
    // bar(coll);



    const pi = 3.14;
    const str = 'Мир'
    // const obgect = {
    //     name: "Olik"
    // };

    // const ar = [1,2,3]
    function a() {
        
    }


    function foo(arg1) {
        
        console.log(arg1(( ) => { return 5}));


    }


    // foo(pi);
    // foo(str);
    // foo({name: "Olik"});
    // foo([1,2,3]);
     foo((argyment) => {return argyment});



    //  Functions

    // 1 Сложение двух чисел: 
    //  Задача: 
    //  Напишите функцию add(a, b), которая принимает два аргумента a и b, и возвращает их сумму.

    function add(a,b){
        return a+b;
    }
    console.log(add(5,5)); 

    // 2 Умножение трех чисел: 
    //  Задача: 
    //  Напишите функцию multiply(a, b, c), которая принимает три аргумента a, b и c, и возвращает их произведение.

    function multiply(a,b,c){
        return a*b*c;
    }
    console.log(multiply(5,5,5));
    

    // 3 Приветствие по имени: 
    //  Задача: 
    //  Напишите функцию greet(name), которая принимает аргумент name (строку) и возвращает приветственное сообщение с использованием этого имени.

    function greet(name) {
        return `${name} добрый вечер!`;
    }
    console.log(greet("Батраз")); 

    // 4 Вычисление площади прямоугольника: 
    //  Задача: 
    //  Напишите функцию calculateRectangleArea(width, height), которая принимает ширину width и высоту height прямоугольника и возвращает его площадь.

    function calculateRectangleArea(width,height){
        return width*height;
    }
    calculateRectangleArea(10,5);

    // 5 Составление предложения: 
    //  Задача: 
    //  Напишите функцию createSentence(subject, verb, object), которая принимает три аргумента: subject, verb и object (все строки), 
    //  и возвращает предложение, составленное из этих слов.

    function createSentence(subject,verb,obgect){
        return `${obgect} ${subject} ${verb}`;
    }
    console.log(createSentence("дождь","не идёт","сегодня"));
    

    // 6 Проверка на четность числа: 
    //  Задача: 
    //  Напишите функцию isEven(number), которая принимает аргумент number и возвращает true, если число четное, и false в противном случае.

    // ДЗ .............................................................+++++++++++++++++++++++
    function isEven(number){
        let r = "";
        (number%2 === 0) ? r = true : r = false;
        return r;
    }
    console.log(isEven(63));

    // 7 Подсчет количества символов в строке: 
    //  Задача: 
    //  Напишите функцию countCharacters(string), которая принимает аргумент string (строку) и возвращает количество символов в этой строке.

    function countCharacters(string){
        return string.length;
    }
    console.log(countCharacters("эта строка содержит символы"));
    
    
    // 8 Расчет суммы элементов массива: 
    //  Задача: 
    //  Напишите функцию sumArray(array), которая принимает массив array чисел и возвращает сумму всех его элементов.

    // reduce()
    // function sumArray(array){
        
        // let suma = 0;
        // for (let i = 0; i < array.length; i++) {
        //     suma += array[i];   
        // }
        
        
        // return suma;

        // array.reduce((suma))
    // }
    
    // console.log(sumArray([5,3,1])); 


    // Callback

    // 1 Приветствие с использованием callback: 
    //  Задача: 
    //  Напишите функцию sayHello(callback), которая принимает callback функцию callback и вызывает её, передавая строку "Привет!" в качестве аргумента.

    function sayHello(callback){
       return callback();
    }

    function privet(){
        return "Привет!"
    }

    console.log( sayHello( privet) );

    
    
    // 2 Удвоение числа с использованием callback: 
    //  Задача: 
    //  Напишите функцию doubleNumber(num, callback), которая принимает число num и callback функцию callback. 
    //  Функция должна вызывать callback функцию, передавая в неё результат удвоения числа num.

    // function diubLeNumber(num,diubLe){
    //     diubLe(num*num);
    // }
    
    // function diubLe(num){
      
    //   let a = num * 2;
    //   return a;
    // }

    // let num = 5;
   
    // console.log(diubLeNumber(num,diubLe));

    
    // 3 Повторение строки с использованием callback: 
    //  Задача: 
    //  Напишите функцию repeatString(str, n, callback), которая принимает строку str, число n и callback функцию callback. 
    //  Функция должна вызывать callback функцию, передавая в неё строку str, повторенную n раз.

    function repeatString(str, n, callback){

    }
    function callback(){

    }
    

}