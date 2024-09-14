// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.


let result = 5 + 5 + "5"; 

console.log(result); 
console.log(typeof(result)); 



// Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @
//  і рахує загальну кількість символів. Результат виведіть в консоль.

let email = prompt("Enter email");

if (email.includes("@")) {
    alert("Email is correct!");
    console.log("User's email is correct. It length is " + email.trim().length);
    console.log("User's email is " + email.trim());
} else {
    alert("Email is incorrect!");
    console.log("User's email isn't correct.");
}



// Записати в окремих змінних кожне слово: My, name, is.
//  Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.


let my = "my"; 
let myName = "Name"; 
let is = "is"; 

let fullName = my + myName + is + "Victor"; 

console.log(fullName); 

//! OR

// let my = "my"; 
// let myName = "Name"; 
// let is = "is"; 
// let hisName = "Victor"; 
// console.log(`${my} ${myName} ${is} ${hisName}`); 


// Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. 
// За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі
//  цього: «Дякуємо, Олександро! До сплати 300 гривень»

let userName = prompt("You need to pay 500$ | Enter your name plz >>> " ); 
payment = 500 + "$"; 

let agree = confirm("Do you agree with this payment?"); 

if (agree){ 
    alert(`Thanks ${userName}! For payment ${payment}`); 
} else{ 
    alert("Thanks for your money $$$ 🦣🦣🦣"); 
}

