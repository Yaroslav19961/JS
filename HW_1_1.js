// HW_1* 
// Задания с разным количеством звездочек:)


// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }


// // 26. Создать переменную “age_1” и присвоить ей значение 10

let age_1 = 10;

// // 27. Создать переменную “age_2” и присвоить ей значение 18

let age_2 = 18;

// // 28. Создать переменную “age_3” и присвоить ей значение 60

let age_3 = 60;

// // 29. Создать if в котором будите проверять значение переменной age_1
// // 30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
// // 31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
// // 32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
// // 33. Иначе выводите “Technical work”.

// // if(age_1 < age_2){
// //  console.log("You don’t have access cause your age is " + age_1 + " It’s less then ");
// // } else if(age_1 >=  age_2 && age_1 <  age_3 ) {
// //         console.log("Welcome  !");
// //     } else if (age_1  > age_3){
// //        console.log("Keep calm and look Culture channel");
// //   } else {
// //       console.log("Technical work");
// //    };


 const checkAge = function(age_1) {
     if (age_1 < age_2){
    return "You don’t have access cause your age is " + age_1 + " It’s less than " + age_2;
} else if (age_1 >=  age_2 && age_1 <  age_3 ) {
        return "Welcome!";
    } else if (age_1  > age_3){
        return "Keep calm and look Culture channel";
    } else {
        return "Technical work";
    }
 };
// // Вывести в консоль результат работы функции с возрастами 17, 18, 61 

    console.log(checkAge(17));
    console.log(checkAge(18));
    console.log(checkAge(61));
    
//___________________________________________________________________________

// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge = function(age_1) {
    if (typeof age_1 !== "number") {
        return "Alert! The input is not a valid number.";
     } else if (age_1 < age_2){
        return "You don’t have access cause your age is " + age_1 + " It’s less than " + age_2;
     } else if (age_1 >=  age_2 && age_1 <  age_3 ) {
             return "Welcome!";
         } else if (age_1  > age_3){
             return "Keep calm and look Culture channel";
         } else {
             return "Technical work";
         }
    };


    console.log(checkAge("17"));
    console.log(checkAge(18));
    console.log(checkAge(61));

//___________________________________________________________________________

// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge = function(age_1) {
    if (isNaN(age_1)) {
        return "Alert! The input is not a valid number.";
     } else if (age_1 < age_2){
        return "You don’t have access cause your age is " + age_1 + " It’s less than " + age_2;
     } else if (age_1 >=  age_2 && age_1 <  age_3 ) {
             return "Welcome!";
         } else if (age_1  > age_3){
             return "Keep calm and look Culture channel";
         } else {
             return "Technical work";
         }
    };


    console.log(checkAge("17"));
    console.log(checkAge(18));
    console.log(checkAge(61));

//___________________________________________________________________________

 // 4***:
// Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

function checkAge(age_1) {
    if (isNaN(age_1)) {
        return "Alert! The input is not a valid number.";
     } else if (age_1 < age_2){
        return "You don’t have access cause your age is " + age_1 + " It’s less than " + age_2;
     } else if (age_1 >=  age_2 && age_1 <  age_3 ) {
             return "Welcome!";
         } else if (age_1  > age_3){
             return "Keep calm and look Culture channel";
         } else {
             return "Technical work";
         }
    };

const ageInput = prompt("Please enter your age:");
const age = parseInt(ageInput, 10);

//___________________________________________________________________________
